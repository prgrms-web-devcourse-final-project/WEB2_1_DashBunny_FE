const OrderSheetSkeleton = () => {
  return (
    <>
      <div className="p-5 border-b">
        <div className="h-7 w-40 bg-gray-200 animate-pulse rounded" />
      </div>
      <div className="p-5 space-y-4">
        {[1, 2, 3].map((item) => (
          <div className="flex items-center gap-3" key={item}>
            <div className="w-[73px] h-[73px] rounded-md bg-gray-200 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-32 bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-24 bg-gray-200 animate-pulse rounded" />
            </div>
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    </>
  )
}

export default OrderSheetSkeleton
