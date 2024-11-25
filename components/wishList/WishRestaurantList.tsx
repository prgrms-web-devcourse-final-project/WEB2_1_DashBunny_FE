// "use client"
import { useGetWishList } from "@/app/wishList/hooks/useGetWishList"
import RestaurantCard from "../main/RestaurantCard"
import Divider from "../common/Divider"
import { getWishList } from "@/app/wishList/api/wishListApi"

export default async function WishRestaurantList() {
  // const { data: stores, isError, isLoading } = useGetWishList()
  const data = await getWishList()
  console.log(data)
  // if (isLoading) return <div>loading</div>
  return (
    <main className="mt-2">
      <div className="space-y-2">
        {data!.map((store) => (
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
