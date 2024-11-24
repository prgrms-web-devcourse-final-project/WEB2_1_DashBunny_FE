import { JusoApiResponse } from "@/app/(address)/address-search/src/model/addressResponse"
import { Address } from "./AddressSearchInput"

interface AddressSearchResultsProps {
  searchTerm: string
  data?: JusoApiResponse
  isLoading: boolean
  isError: boolean
  onClick: (address: Address) => void
}

export default function AddressSearchResults({
  searchTerm,
  data,
  isLoading,
  isError,
  onClick,
}: AddressSearchResultsProps) {
  if (!searchTerm) return null
  if (data?.results.juso === null) return null
  if (isLoading) return null
  if (isError) {
    return <div>에러가 발생했습니다</div>
  }
  return (
    <div className="absolute  left-0 right-0 bg-white shadow-sm ">
      {data?.results.juso.map((item) => (
        <div
          onClick={() => onClick({ roadAddress: item.roadAddr, jibunAddress: item.jibunAddr })}
          key={item.roadAddr}
          className="p-4 hover:bg-gray-50 cursor-pointer"
        >
          {item.roadAddr}
        </div>
      ))}
    </div>
  )
}
