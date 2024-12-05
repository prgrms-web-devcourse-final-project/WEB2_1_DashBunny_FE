// 쿠폰 API 응답 타입들
export interface LimitedCoupon {
  couponId: number
  couponName: string
  discountPrice: number
  discountType: "FIXED" | "PERCENT"
  maximumDiscount: number | null
  downloadStartDate: string
}

export interface LimitedCouponDisabled {
  message: string
}

export interface LimitedCouponEmpty {
  [key: string]: never
}

export type LimitedCouponResponse = LimitedCoupon | LimitedCouponDisabled | LimitedCouponEmpty

// 타입 가드
export const isCouponData = (response: LimitedCouponResponse): response is LimitedCoupon => {
  return "couponId" in response
}

export const isErrorResponse = (
  response: LimitedCouponResponse,
): response is LimitedCouponDisabled => {
  return "message" in response
}

export const isEmptyResponse = (
  response: LimitedCouponResponse,
): response is LimitedCouponEmpty => {
  return Object.keys(response).length === 0
}
