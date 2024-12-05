import { api } from "@/shared/axios/axiosInstance"
import { LimitedCouponResponse } from "../../../types/limitedCouponTypes"

//진행 중이거나 진행이 예정된 선착순 쿠폰 데이터 가져오기
export const getLimitedCouponData = async (): Promise<LimitedCouponResponse> => {
  const response = await api.get<LimitedCouponResponse>("/user/coupon/first-come")
  return response.data
}

//선착순 쿠폰 다운로드
interface drawLimitedCouponDto {
  couponId: number
}
export const drawLimitedCoupon = async ({ couponId }: drawLimitedCouponDto): Promise<string> => {
  const { data } = await api.post<string>(`/user/coupon/download/first-come/${couponId}`)
  return data
}
