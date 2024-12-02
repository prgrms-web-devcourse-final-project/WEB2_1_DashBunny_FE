export default function RestaurantCardSkeleton() {
  return (
    <div className="flex gap-4 py-2 relative animate-pulse">
      <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
      <div>
        <div className="flex items-center justify-between">
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="w-5 h-5 bg-gray-200 rounded "></div>
          <div className="w-5 h-5 bg-gray-200 rounded "></div>
          <div className="w-8 h-4 bg-gray-200 rounded "></div>
          <div className="w-16 h-4 bg-gray-200 rounded "></div>
        </div>
        <div className="w-20 h-4 bg-gray-200 rounded mt-2"></div>
      </div>
      <div className="w-6 h-6 bg-gray-200 rounded absolute left-80 top-9"></div>
    </div>
  )
}
