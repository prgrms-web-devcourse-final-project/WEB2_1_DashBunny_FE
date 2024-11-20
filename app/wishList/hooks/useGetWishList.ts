import { Store } from "@/shared/model/restaurant"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getWishList } from "../api/wishListApi"

export const useGetWishList = (): UseQueryResult<Store[], Error> => {
  return useQuery({
    queryKey: ["wishList"],
    queryFn: getWishList,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
