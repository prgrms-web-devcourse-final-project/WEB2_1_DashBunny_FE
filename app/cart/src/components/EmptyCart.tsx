import Link from "next/link"

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-500px)]">
      <div className="w-20 h-20 mb-4 text-gray-300">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">장바구니가 비어있어요</h2>
      <p className="text-gray-500 text-center mb-8 px-4">메뉴를 담아 맛있는 음식을 주문해보세요!</p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        메뉴 담으러 가기
      </Link>
    </div>
  )
}

export default EmptyCart
