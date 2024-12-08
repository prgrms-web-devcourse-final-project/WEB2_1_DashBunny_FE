// hooks/useOrderSocket.ts
import { useEffect } from "react"
import { Client, Message } from "@stomp/stompjs"
import { toast } from "react-hot-toast"
import { OrderPayload } from "../types/Order"

export const useOrderSocket = (storeId: string, orderId: string) => {
  useEffect(() => {
    //stomp클라이언트 생성
    const client = new Client({
      brokerURL: process.env.NEXT_PUBLIC_WEBSOCKET_URL,
      connectHeaders: {
        // Authorization: `Bearer ${token}`
      },
      debug: function (str) {
        console.log(str)
      },
      //5초마다 재연결 시도
      reconnectDelay: 5000,
      //4초마다 헬스체크
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })

    const onConnect = () => {
      console.log("Connected to WebSocket")

      //연결 성공 시 토픽을 구독한다.
      client.subscribe(`/topic/userOrder/${storeId}/${orderId}`, (message: Message) => {
        const payload: OrderPayload = JSON.parse(message.body)

        switch (payload.type) {
          case "ORDER_PENDING":
            toast.loading("주문 접수 중...", {
              id: `order-${orderId}`,
            })
            break

          case "IN_PROGRESS":
            toast.success(payload.message, {
              id: `order-${orderId}`,
            })
            break

          case "DECLINED":
            toast.error(payload.message, {
              id: `order-${orderId}`,
            })
            break
        }
      })

      // 에러 토픽 구독
      client.subscribe("/topic/order/error", (message: Message) => {
        const payload: OrderPayload = JSON.parse(message.body)
        if (payload.type === "ORDER_FAILED") {
          toast.error(`주문 실패: ${payload.data.error}`)
        }
      })
    }

    client.onStompError = (frame) => {
      console.error("STOMP error", frame)
      toast.error("연결 오류가 발생했습니다.")
    }

    client.onConnect = onConnect

    // 연결 시작
    client.activate()

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      if (client.connected) {
        client.deactivate()
      }
    }
  }, [storeId, orderId])
}
