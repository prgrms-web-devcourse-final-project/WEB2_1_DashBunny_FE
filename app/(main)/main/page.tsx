import AddressBar from "@/components/main/AddressBar"
import CategoryNav from "@/components/main/CategoryNav"
import Header from "@/components/main/Header"
import SearchBar from "@/components/main/SearchBar"
import RestaurantList from "@/components/main/RestaurantList"

export default function MainPage() {
  return (
    <main>
      <Header />
      <AddressBar />
      <SearchBar placeholder="무엇을 찾으시나요?" />
      <CategoryNav />
      <RestaurantList />
    </main>
  )
}
