import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getRestaurantListByCategory } from "../api/restaurantList"
import { UsersStoreListResponseDto } from "@/types/Store"

export const useGetRestaurantListByCategory = (
  category: string,
  address: string | null,
): UseQueryResult<UsersStoreListResponseDto[], Error> => {
  return useQuery({
    queryKey: ["restaurantList", category, address],
    queryFn: () => {
      if (!address) {
        return Promise.reject(new Error("주소를 설정해주세요"))
      }
      return getRestaurantListByCategory(category, address)
    },
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: true,
    enabled: !!address, // address가 있을 때만 쿼리 실행
  })
}
