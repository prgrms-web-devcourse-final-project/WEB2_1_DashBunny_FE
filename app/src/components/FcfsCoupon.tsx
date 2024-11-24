interface FcfsCouponProps {
  status: "waiting" | "open" | "result" | "close"
}
export default function FcfsCoupon({ status }: FcfsCouponProps) {
  return (
    <div className="p-3 h-full">
      <div className="bg-orange-700 text-white rounded-xl flex justify-between items-center p-3 relative h-full overflow-hidden">
        {status === "waiting" && (
          <>
            <div className="w-56 flex flex-col ">
              <div className="font-bold text-coupon">선착순 쿠폰</div>
              <div className="text-right font-bold text-coupon">오픈까지</div>
            </div>

            <div className="text-2xl font-bold text-coupon">01:20</div>
          </>
        )}
        {/* 점선 장식 */}
        <div className="absolute top-1/2 left-[248px] -translate-x-1/2 -translate-y-1/2 h-full border-l-2 border-dashed  border-white" />
        {/* 원형 장식 */}
        <div className="absolute left-60 -bottom-2  w-4 h-4 bg-white rounded-full" />
        <div className="absolute left-60 -top-2  w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  )
}
