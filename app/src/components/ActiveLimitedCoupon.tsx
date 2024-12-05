"use client"
import { formatTime } from "@/shared/utils/date"
import { LimitedCoupon } from "@/types/limitedCouponTypes"
import { useDrawLimitedCoupon } from "../hooks/useDrawLimitedCoupon"

interface ActiveLimitedCouponProps {
  limitedCouponData: LimitedCoupon
}
export default function ActiveLimitedCoupon({
  limitedCouponData: {
    couponId,
    couponName,
    discountPrice,
    discountType,
    downloadStartDate,
    maximumDiscount,
  },
}: ActiveLimitedCouponProps) {
  const { drawCoupon } = useDrawLimitedCoupon()
  const handleDrawCoupon = () => {
    drawCoupon({ couponId })
  }
  return (
    <button onClick={handleDrawCoupon} className="max-w-[400px] box-border h-full w-full">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600  text-white rounded-xl flex justify-between items-center p-3 relative h-full overflow-hidden">
        {discountType === "PERCENT" && (
          <div className=" grid grid-cols-3 w-full ">
            <div className="text-nowrap  flex-col h-full col-span-2 ">
              <p className="font-bold text-coupon">선착순 쿠폰 {discountPrice + "%"}</p>
              <p className=" text-orange-200 text-2xl">최대{maximumDiscount + "원"}</p>
            </div>
            <div className="text-2xl font-bold flex items-center justify-center text-coupon">
              3시
            </div>
          </div>
        )}
        {discountType === "FIXED" && (
          <div className=" grid grid-cols-3 w-full h-full">
            <div className="text-nowrap font-bold text-coupon h-full">선착순 쿠폰</div>
            <div className="text-2xl font-bold flex items-end  text-coupon h-full">
              {discountPrice + "원"}
            </div>
            <div className="text-2xl font-bold flex items-center justify-center text-coupon">
              {formatTime(downloadStartDate)}
            </div>
          </div>
        )}
        <div className="absolute top-1/2 left-[248px] -translate-x-1/2 -translate-y-1/2 h-full border-l-2 border-dashed  border-white" />
        <div className="absolute left-60 -bottom-2  w-4 h-4 bg-white rounded-full" />
        <div className="absolute left-60 -top-2  w-4 h-4 bg-white rounded-full" />
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full"></div>
      </div>
    </button>
  )
}
