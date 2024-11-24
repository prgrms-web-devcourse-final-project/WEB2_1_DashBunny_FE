"use client"

interface AddressItem {
  roadAddress: string
  jibunAddress: string
  isDash?: boolean
}

interface AddressSearchResultsProps {
  data: AddressItem[]
}

export default function AddressList() {
  const data: AddressItem[] = [
    {
      roadAddress: "서울특별시 강남구 테헤란로 427",
      jibunAddress: "서울특별시 강남구 역삼동 737-37",
      isDash: true,
    },
    {
      roadAddress: "서울특별시 강남구 테헤란로 427",
      jibunAddress: "서울특별시 강남구 역삼동 737-37",
    },
  ]
  return (
    <div className="flex flex-col divide-y">
      {data.map((item, index) => (
        <div key={index} className="py-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                fill="#9E9E9E"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
              />
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-black-900">{item.roadAddress}</span>
                {item.isDash && (
                  <span className="px-1.5 py-0.5 bg-gray-100 text-xs rounded">DASH</span>
                )}
              </div>
              <p className="text-sm text-gray-500">[지번] {item.jibunAddress}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1 border rounded-full text-sm">수정</button>
            <button className="px-3 py-1 border rounded-full text-sm">삭제</button>
          </div>
        </div>
      ))}
    </div>
  )
}
