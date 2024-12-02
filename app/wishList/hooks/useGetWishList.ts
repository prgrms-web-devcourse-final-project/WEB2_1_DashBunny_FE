import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getWishListApi } from "../api/getWishListApi"
import { UsersStoreListResponseDto } from "@/types/Store"

export const useGetWishList = (): UseQueryResult<UsersStoreListResponseDto[], Error> => {
  console.log("실행됨")
  return useQuery({
    queryKey: ["wishList"],
    queryFn: getWishListApi,
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
