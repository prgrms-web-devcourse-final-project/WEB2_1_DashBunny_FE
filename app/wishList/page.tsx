import WishRestaurantList from "@/components/wishList/WishRestaurantList"

export default function page() {
  //고도화@=> 헤더 컴포넌트화
  return (
    <main>
      {/* 상단 헤더 */}
      <header className="sticky top-0">
        <h1 className="text-h2 font-semibold text-center">찜</h1>
      </header>

      {/* 메인 컨텐츠 */}
      <WishRestaurantList />
    </main>
  )
}
