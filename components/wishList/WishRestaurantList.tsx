"use client"
import { useGetWishList } from "@/app/wishList/hooks/useGetWishList"
import RestaurantCard from "../main/RestaurantCard"
import Divider from "../common/Divider"

export default function WishRestaurantList() {
  const { data: stores, isError, isLoading } = useGetWishList()
  // const data = await getWishList()
  // console.log(data)
  if (isLoading) return <div>loading</div>
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
