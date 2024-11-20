import SearchBar from "@/components/main/SearchBar"
import OrderList from "./components/OrderList"
import Header from "@/components/common/Header"

export default function OrderHistoryPage() {
  return (
    <main className="overflow-auto">
      <Header title="주문내역" />
      <SearchBar height="low" placeholder="주문한 메뉴/매장을 찾아보세요" />
      <OrderList />
    </main>
  )
}
