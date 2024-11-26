import Header from "@/components/main/Header"
import SearchBar from "@/components/main/SearchBar"
import FoodCategoryList from "./src/components/FoodCategoryList"
import BottomBannerItem from "./src/components/BottomBannerItem"
import dynamic from "next/dynamic"

const DynamicAddressBar = dynamic(() => import("@/components/main/DynamicAddressBar"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function Home() {
  return (
    <>
      <main className="p-5 ">
        <Header />
        <DynamicAddressBar />
        <SearchBar placeholder="무엇을 찾으시나요?" />
        <FoodCategoryList />
      </main>
      <BottomBannerItem />
    </>
  )
}
