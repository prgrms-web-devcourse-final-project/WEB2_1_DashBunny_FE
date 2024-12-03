import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postCartData, addCartDataWithOverwrite } from "../api/cart"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"

interface PendingItem {
  menuId: number
  quantity: number
}

const CART_QUERY_KEY = ["CartData"] as const

export const useAddCartItem = () => {
  const queryClient = useQueryClient()
  //모달 상태
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  //장바구니에 다른 가게의 메뉴가 있을 때 요청의 데이터를 임시로 보관하는 상태
  const [pendingItem, setPendingItem] = useState<PendingItem | null>(null)

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: postCartData,
    //TODO: 가게 다를 때 서버에서 주는 에러랑 아예 요청이 안갔을 때 에러 구분해야.
    //variables에는 mutation에 전달된 인자가 들어있음
    onError: async (error: Error | AxiosError<ApiError>, variables) => {
      if (axios.isAxiosError(error)) {
        console.log(error.status === 500)
        //다른 가게를 선택했을 때 서버에서 주는 에러. 아직 서버 연결 전이라 요청이 안갔을 때 에러
        if (error.status === 500) {
          setShowConfirmDialog(true)
          setPendingItem({
            menuId: variables.menuId,
            quantity: variables.quantity,
          })
          //다른 가게 에러, 네트워크 에러를 제외한 모든 에러
        } else {
          console.error("API 요청 실패:", error.response?.data?.message)
        }
        //네트워크 에러
      } else {
        console.error("네트워크 에러:", error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
      setShowConfirmDialog(false)
      setPendingItem(null)
    },
  })
  //모달에서 실행할 함수. 예를 누르면 pendingItem에 overWrite Params가 추가된 요청을 보낸다.
  const handleConfirmOverwrite = async (confirm: boolean) => {
    if (!pendingItem) return

    if (confirm) {
      try {
        await addCartDataWithOverwrite({
          ...pendingItem,
          overwrite: true,
        })
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
      } catch (error) {
        console.error("Cart overwrite failed:", error)
      }
    }
    //뭘 눌렀건 모달창 닫고 pendingItem 초기화
    setShowConfirmDialog(false)
    setPendingItem(null)
  }

  return {
    addCart: mutate,
    isUpdating: isPending,
    hasError: isError,
    isSuccess,
    showConfirmDialog,
    handleConfirmOverwrite,
  }
}
