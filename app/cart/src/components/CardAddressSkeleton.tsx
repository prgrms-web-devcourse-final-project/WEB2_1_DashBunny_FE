export default function CardAddressSkeleton() {
  return (
    <div className="px-4 pb-4 animate-pulse">
      <div className="flex gap-2">
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        <div>
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
