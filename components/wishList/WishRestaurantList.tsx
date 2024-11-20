"use client"
import { useGetWishList } from "@/app/wishList/hooks/useGetWishList"
import React from "react"
import RestaurantCard from "../main/RestaurantCard"
import { div } from "framer-motion/client"
import Divider from "../common/Divider"

export default function WishRestaurantList() {
  const { data: stores, isError, isLoading } = useGetWishList()

  if (isLoading) return <div>loading</div>
  return (
    <main className="mt-2">
      <div className="space-y-2">
        {stores!.map((store) => (
          <>
            <div className="flex flex-col gap-2 pl-5">
              <RestaurantCard key={store.store_id} {...store} />
            </div>
            <Divider />
          </>
        ))}
      </div>
    </main>
  )
}
