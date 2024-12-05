import { useMutation, useQueryClient } from "@tanstack/react-query"
import { drawLimitedCoupon } from "../api/limitedCoupon"
import { ApiError } from "next/dist/server/api-utils"
import axios, { AxiosError } from "axios"
import { LIMITED_COUPON_QUERY_KEY } from "./useGetLimitedCoupon"

const DUPLICATED_ERROR_MESSAGE = "중복 다운로드가 불가능한 쿠폰입니다."
const EARLY_TERMINATED_ERROR_MESSAGE =
  "선착순 쿠폰이 모두 소진되었습니다. 다음 이벤트를 기대해주세요!"
export const useDrawLimitedCoupon = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: drawLimitedCoupon,
    onError: (error: Error | AxiosError<ApiError>, variables) => {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data
        switch (errorMessage.error) {
          case DUPLICATED_ERROR_MESSAGE:
            alert(DUPLICATED_ERROR_MESSAGE)
            break
          case EARLY_TERMINATED_ERROR_MESSAGE:
            alert(EARLY_TERMINATED_ERROR_MESSAGE)
            break
          default:
            console.error("API 요청 실패:", errorMessage)
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LIMITED_COUPON_QUERY_KEY })
      alert("쿠폰 다운로드 성공!")
    },
  })

  return { drawCoupon: mutate, isLoading: isPending, hasError: isError, isSuccess }
}
