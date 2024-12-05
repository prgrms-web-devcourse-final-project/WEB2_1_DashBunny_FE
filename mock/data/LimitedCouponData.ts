import { LimitedCoupon } from "@/types/limitedCouponTypes"

export const limitedCouponDummyData: LimitedCoupon = {
  couponId: 5, //쿠폰아이디
  couponName: "선착순 쿠폰 이벤트", //쿠폰명
  discountPrice: 30, //할인금액 (Long)
  discountType: "PERCENT", //할인 우형
  maximumDiscount: 10000, //최대할인 금액 (FIXED일때 null)
  downloadStartDate: "2024-11-30T00:00:00",
}
