import { UsersStoreDetailResponseDto } from "@/types/Store"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getDetailStoreData } from "../api/getDetailStoreData"

export const useDetailStoreData = (
  keyword: string,
): UseQueryResult<UsersStoreDetailResponseDto, Error> => {
  return useQuery({
    queryKey: ["StoreDetailData", keyword],
    queryFn: () => getDetailStoreData(keyword),
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
