import React from "react"
import RestaurantCardSkeleton from "./components/RestaurantCardSkeleton"

export default function Loading() {
  return (
    <main className="mt-2">
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <RestaurantCardSkeleton />
          </div>
        ))}
      </div>
    </main>
  )
}
