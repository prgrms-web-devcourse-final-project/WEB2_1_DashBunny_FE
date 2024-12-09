// hooks/useOrderWebSocket.ts
import { useEffect, useRef, useCallback } from "react"

interface OrderWebSocketProps {
  storeId: string
  orderId: string
  onPending?: (data: any) => void
  onFailed?: (data: any) => void
  onProgress?: (data: any) => void
  onDeclined?: (data: any) => void
}

export const useOrderWebSocket = ({
  storeId,
  orderId,
  onPending,
  onFailed,
  onProgress,
  onDeclined,
}: OrderWebSocketProps) => {
  const socketRef = useRef<WebSocket | null>(null)

  const connect = useCallback(() => {
    // WebSocket 서버 URL을 환경변수로 관리하는 것을 추천
    const wsUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/ws`
    const socket = new WebSocket(wsUrl)

    socket.onopen = () => {
      // 주문 관련 토픽 구독
      socket.send(
        JSON.stringify({
          subscribe: `/topic/userOrder/${storeId}/${orderId}`,
          subscription: `/topic/order/error`,
        }),
      )
    }

    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data)

      switch (payload.type) {
        case "ORDER_PENDING":
          onPending?.({
            orderId: payload.data.orderId,
            storeId: payload.data.storeId,
            message: payload.message,
          })
          break

        case "ORDER_FAILED":
          onFailed?.({
            error: payload.data.error,
            message: payload.message,
          })
          break

        case "IN_PROGRESS":
          onProgress?.({
            orderId: payload.data.orderId,
            storeId: payload.data.storeId,
            preparationTime: payload.data.preparationTime,
            orderStatus: payload.data.orderStatus,
            message: payload.message,
          })
          break

        case "DECLINED":
          onDeclined?.({
            orderId: payload.data.orderId,
            storeId: payload.data.storeId,
            declineReasonType: payload.data.declineReasonType,
            message: payload.message,
          })
          break
      }
    }

    socket.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    socketRef.current = socket
  }, [storeId, orderId, onPending, onFailed, onProgress, onDeclined])

  useEffect(() => {
    connect()

    return () => {
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [connect])

  return {
    socket: socketRef.current,
    reconnect: connect,
  }
}
