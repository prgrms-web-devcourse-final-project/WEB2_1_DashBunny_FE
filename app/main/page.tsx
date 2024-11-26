import CategoryNav from "@/components/main/CategoryNav"
import Header from "@/components/main/Header"
import SearchBar from "@/components/main/SearchBar"
import RestaurantList from "@/components/main/RestaurantList"
import FoodCategoryList from "./components/FoodeCategoryList"
import dynamic from "next/dynamic"
const DynamicAddressBar = dynamic(() => import("@/components/main/DynamicAddressBar"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function MainPage() {
  return (
    <main className="p-5">
      <Header />
      <DynamicAddressBar />
      <SearchBar placeholder="무엇을 찾으시나요?" />
      <FoodCategoryList />
      <RestaurantList />
    </main>
  )
}
