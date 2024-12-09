import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postCartData, addCartDataWithOverwrite, PostCartDto } from "../api/cart"
import axios, { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"
import { AnotherStoreConfirmDialog } from "@/components/Dialog/AnotherStoreConfirmDialog"
import { overlay } from "overlay-kit"
import { NavigateToCartDialog } from "@/components/Dialog/NavigateToCartDialog"
const CART_QUERY_KEY = ["CartData"] as const

export const useAddCartItem = () => {
  const queryClient = useQueryClient()
  //모달 상태

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: postCartData,
    //TODO: 가게 다를 때 서버에서 주는 에러랑 아예 요청이 안갔을 때 에러 구분해야.
    //variables에는 mutation에 전달된 인자가 들어있음
    onError: async (error: Error | AxiosError<ApiError>, variables) => {
      if (axios.isAxiosError(error)) {
        //다른 가게를 선택했을 때 서버에서 주는 에러. 아직 서버 연결 전이라 요청이 안갔을 때 에러
        switch (error.status) {
          case 400:
            //모달을 열고 실행할 함수와 모달을 여닫는 함수를 Props로 넘겨준다
            overlay.open(
              ({ close, isOpen, unmount }) =>
                AnotherStoreConfirmDialog({
                  close,
                  isOpen,
                  unmount,
                  //함수가 Promise를 반환하므로 async, await 사용
                  handleConfirmOverwrite: async (confirm) => {
                    await handleConfirmOverwrite(confirm, variables)
                  },
                }),
              {},
            )

            //다른 가게 에러, 네트워크 에러를 제외한 모든 에러
            break
          default:
            console.error("API 요청 실패:", error.response?.data?.message)
        }
        //네트워크 에러
      } else {
        console.error("네트워크 에러:", error)
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
      overlay.open(
        ({ close, isOpen, unmount }) =>
          NavigateToCartDialog({
            close,
            isOpen,
            unmount,
          }),
        {},
      )
    },
  })
  //모달에서 실행할 함수. error variables로 받은 메뉴추가 데이터와 overWrite Params가 추가된 요청을 보낸다.
  //데이터 요청을 보내고 난 후 쿼리 무효화를 하기 위해 비동기로 처리
  const handleConfirmOverwrite = async (confirm: boolean, postCardDto: PostCartDto) => {
    if (confirm) {
      try {
        await addCartDataWithOverwrite({
          ...postCardDto,
          overwrite: true,
        })
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
        console.log("최신화")
      } catch (error) {
        console.error("Cart overwrite failed:", error)
      }
    } else {
      try {
        addCartDataWithOverwrite({
          ...postCardDto,
          overwrite: false,
        })
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY })
      } catch (error) {
        console.error("Cart overwrite failed:", error)
      }
    }
    //뭘 눌렀건 모달창 닫고 pendingItem 초기화
  }

  return {
    addCart: mutate,
    isUpdating: isPending,
    hasError: isError,
    isSuccess,

    handleConfirmOverwrite,
  }
}
