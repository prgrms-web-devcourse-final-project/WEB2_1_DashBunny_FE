import { LimitedCouponDisabled } from "@/types/limitedCouponTypes"

interface ActiveLimitedCouponProps {
  limitedCouponData: LimitedCouponDisabled
}
export default function DisableLimitedCoupon({ limitedCouponData }: ActiveLimitedCouponProps) {
  return (
    <div className="max-w-[400px] box-border h-full">
      <div className="bg-orange-700 text-white rounded-xl flex justify-between items-center p-3 relative h-full overflow-hidden">
        <div className="  h-full">
          <div className="font-bold text-wrap whitespace-pre-wrap text-start h-full text-coupon">
            {limitedCouponData.message}
          </div>
        </div>
        <div className="absolute top-1/2 left-[248px] -translate-x-1/2 -translate-y-1/2 h-full border-l-2 border-dashed  border-white" />
        <div className="absolute left-60 -bottom-2  w-4 h-4 bg-white rounded-full" />
        <div className="absolute left-60 -top-2  w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  )
}
