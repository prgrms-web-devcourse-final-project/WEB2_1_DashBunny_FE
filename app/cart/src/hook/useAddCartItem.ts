import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postCartData, addCartDataWithOverwrite } from "../api/cart"
import { useState } from "react"

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
    //@=> 가게 다를 때 서버에서 주는 에러랑 아예 요청이 안갔을 때 에러 구분해야.
    //variables에는 mutation에 전달된 인자가 들어있음
    onError: async (error: Error, variables) => {
      if (error.message === "장바구니 데이터 전송 실패") {
        //모달창 열기
        setShowConfirmDialog(true)
        //pendingItem 상태에 요청 데이터 저장
        setPendingItem({
          menuId: variables.menuId,
          quantity: variables.quantity,
        })
      } else {
        console.error("Cart add failed:", error)
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
