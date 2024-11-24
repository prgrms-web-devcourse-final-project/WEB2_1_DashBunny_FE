import AddressBar from "@/components/main/AddressBar"
import CategoryNav from "@/components/main/CategoryNav"
import Header from "@/components/main/Header"
import SearchBar from "@/components/main/SearchBar"
import RestaurantList from "@/components/main/RestaurantList"
import FoodCategoryList from "./components/FoodeCategoryList"

export default function MainPage() {
  return (
    <main className="p-5">
      <Header />
      <AddressBar />
      <SearchBar placeholder="무엇을 찾으시나요?" />
      <FoodCategoryList />
      <RestaurantList />
    </main>
  )
}
