// components/orders/SearchBar.tsx
export default function SearchBar() {
  return (
    <div className="px-4 py-3 border-b">
      <div className="relative">
        <input
          type="search"
          placeholder="주문한 메뉴 / 매장을 찾아보세요"
          className="w-full px-4 py-3 rounded-full border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>
    </div>
  )
}
