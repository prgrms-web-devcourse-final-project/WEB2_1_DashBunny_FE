import Header from "@/components/common/Header"
import WishRestaurantList from "@/components/wishList/WishRestaurantList"
import { Suspense } from "react"
import Loading from "./loading"

export default function page() {
  //고도화@=> 헤더 컴포넌트화
  return <WishRestaurantList />
}
