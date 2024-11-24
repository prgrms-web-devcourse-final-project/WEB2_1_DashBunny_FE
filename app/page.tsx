import AddressBar from "@/components/main/AddressBar"
import CategoryNav from "@/components/main/CategoryNav"
import Header from "@/components/main/Header"
import SearchBar from "@/components/main/SearchBar"
import FoodCategoryList from "./src/components/FoodCategoryList"
import BottomBannerItem from "./src/components/BottomBannerItem"

export default function Home() {
  return (
    <>
      <main className="p-5 ">
        <Header />
        <AddressBar />
        <SearchBar placeholder="무엇을 찾으시나요?" />
        <FoodCategoryList />
      </main>
      <BottomBannerItem />
    </>
  )
}
