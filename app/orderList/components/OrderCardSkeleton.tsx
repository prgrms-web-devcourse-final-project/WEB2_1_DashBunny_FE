const OrderSkeleton = () => {
  return (
    <div className="p-4 pt-2">
      <header className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-5 text-sm">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" /> {/* 날짜 */}
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" /> {/* 주문상태 */}
        </div>
      </header>

      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <div className="w-full h-full rounded-2xl bg-gray-200 animate-pulse" /> {/* 이미지 */}
        </div>

        <div className="flex-1 pl-3 flex items-center">
          <div className="flex-1 min-w-0">
            <div className="w-36 h-[19px] bg-gray-200 rounded animate-pulse" /> {/* 가게명 */}
            <div className="w-48 h-5 bg-gray-200 rounded animate-pulse mt-1" /> {/* 메뉴명 */}
            <div className="w-28 h-[22px] bg-gray-200 rounded animate-pulse mt-1" /> {/* 가격 */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSkeleton
