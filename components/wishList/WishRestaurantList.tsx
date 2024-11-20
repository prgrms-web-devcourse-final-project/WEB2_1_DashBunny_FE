"use client"
import { useGetWishList } from "@/app/wishList/hooks/useGetWishList"
import React from "react"
import RestaurantCard from "../main/RestaurantCard"
import { div } from "framer-motion/client"

export default function WishRestaurantList() {
  const { data: stores, isError, isLoading } = useGetWishList()

  if (isLoading) return <div>loading</div>
  return (
    <main className="flex-1 ">
      <div className="space-y-4">
        {stores!.map((store) => (
          <div>
            <RestaurantCard key={store.store_id} {...store} />
            <div className="w-full h-2 bg-gray-100"></div>
          </div>
        ))}
      </div>
    </main>
  )
}
