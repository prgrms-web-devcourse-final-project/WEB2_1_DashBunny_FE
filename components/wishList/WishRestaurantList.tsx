"use client"
import { useGetWishList } from "@/app/wishList/hooks/useGetWishList"
import RestaurantCard from "../main/RestaurantCard"
import Divider from "../common/Divider"
import NoWishList from "@/app/wishList/components/NoWishList"
import OrderSkeleton from "@/app/orderList/components/OrderCardSkeleton"

export default function WishRestaurantList() {
  const { data: stores, isError, isLoading } = useGetWishList()

  if (isLoading)
    return (
      <section className="mt-4">
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
      </section>
    )
  if (isError) return <div>에러가 발생했습니다.</div>
  if (stores?.length === 0) return <NoWishList />
  return (
    <main className="mt-2">
      <div className="space-y-2">
        {stores!.map((store) => (
          <div key={store.storeId}>
            <div className="flex flex-col gap-2 pl-5">
              <RestaurantCard key={store.storeId} {...store} />
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </main>
  )
}
