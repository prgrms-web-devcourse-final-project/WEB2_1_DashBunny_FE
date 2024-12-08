import Link from "next/link"

export default function NoWishList() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 mb-4 text-gray-300">
        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">찜한 음식점이 없어요</h3>
      <p className="text-sm text-gray-500 text-center mb-6">마음에 드는 음식점을 찜해보세요!</p>
      <Link
        href="/"
        className="px-6 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        음식점 찾아보기
      </Link>
    </div>
  )
}
