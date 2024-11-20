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
      <SearchBar />
      <CategoryNav />
      <RestaurantList />
    </main>
  )
}
