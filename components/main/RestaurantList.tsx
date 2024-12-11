"use client"
import { useGetRestaurantListByCategory } from "@/app/main/hooks/useGetRestaurantListByCategory"
import RestaurantCard from "./RestaurantCard"
import { useManageAddress } from "@/app/(address)/address-save/src/hooks/useManageAddress"
import { useEffect, useState } from "react"
interface RestaurantListProps {
  category: string
}
//서버 컴포넌트에서 데이터 요청이 필요한데, 그 요청의 매개변수가 클라이언트의 로컬스토리지에 있다면
export default function RestaurantList({ category }: RestaurantListProps) {
  const {
    data: restaurants,
    isLoading,
    isError,
  } = useGetRestaurantListByCategory("KOREANSNACKS", "서울특별시 중구 세종대로 110")
  console.log("🚀 ~ RestaurantList ~ restaurants:", restaurants)

  if (isLoading) return <div>loading</div>
  if (!restaurants) return <div>데이터가 없습니다</div>
  // if (isError) return <div>에러가 발생했습니다</div>
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={restaurant.storeId} {...restaurant} />
      ))}
    </>
  )
}
