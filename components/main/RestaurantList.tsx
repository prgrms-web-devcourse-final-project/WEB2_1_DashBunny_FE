"use client"
import { useGetRestaurantListByCategory } from "@/app/(main)/main/hooks/useGetRestaurantListByCategory"
import React from "react"
import RestaurantCard from "./RestaurantCard"

export default function RestaurantList() {
  const { data: restaurants, isLoading, isError } = useGetRestaurantListByCategory()
  if (isLoading) return <div>loading</div>
  return (
    <section>
      {restaurants!.map((restaurant, index) => (
        <RestaurantCard key={index} {...restaurant} />
      ))}
    </section>
  )
}
