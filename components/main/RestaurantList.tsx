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
  const { getMainAddress } = useManageAddress()
  const [address, setAddress] = useState<string | null>(null)

  // 컴포넌트 마운트 시 주소 로드
  useEffect(() => {
    const savedAddress = getMainAddress()
    setAddress(savedAddress)
  }, [])

  const { data: restaurants, isLoading } = useGetRestaurantListByCategory(category, address)

  if (isLoading) return <div>loading</div>
  if (!restaurants) return <div>데이터가 없습니다</div>
  return (
    <>
      {restaurants!.map((restaurant, index) => (
        <RestaurantCard key={restaurant.storeId} {...restaurant} />
      ))}
    </>
  )
}
