import React from "react"

const StorySkeleton = () => {
  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-gray-100">
      {/* Background skeleton */}
      <div className="w-full h-full bg-gray-200 animate-pulse" />

      {/* Top shadow and header skeleton */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="flex justify-between items-center p-4">
          {/* Account name skeleton */}
          <div className="h-4 w-32 bg-gray-300 rounded animate-pulse" />
          {/* Heart icon skeleton */}
          <div className="h-6 w-6 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>

      {/* Bottom shadow and content skeleton */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent">
        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4 p-4">
          {/* Menu name skeleton */}
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse" />
          {/* Order button skeleton */}
          <div className="h-10 w-28 bg-gray-300 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default StorySkeleton
