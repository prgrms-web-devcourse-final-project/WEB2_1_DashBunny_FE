"use client"
import { useGetRestaurantListByCategory } from "@/app/main/hooks/useGetRestaurantListByCategory"
import RestaurantCard from "./RestaurantCard"

export default function RestaurantList() {
  const { data: restaurants, isLoading, isError } = useGetRestaurantListByCategory()
  if (isLoading) return <div>loading</div>
  return (
    <>
      {restaurants!.map((restaurant, index) => (
        <RestaurantCard key={restaurant.storeId} {...restaurant} />
      ))}
    </>
  )
}
