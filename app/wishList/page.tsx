import Header from "@/components/common/Header"
import WishRestaurantList from "@/components/wishList/WishRestaurantList"

export default function page() {
  //고도화@=> 헤더 컴포넌트화
  return (
    <main className="relative">
      <Header title="찜" />
      <WishRestaurantList />
    </main>
  )
}
