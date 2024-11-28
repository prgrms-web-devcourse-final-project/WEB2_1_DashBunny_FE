import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getWishList } from "../api/wishListApi"
import { UsersStoreListResponseDto } from "@/types/Store"

export const useGetWishList = (): UseQueryResult<UsersStoreListResponseDto[], Error> => {
  return useQuery({
    queryKey: ["wishList"],
    queryFn: getWishList,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
