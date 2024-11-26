import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getJusoApi } from "../api/getJusoApi"
import { JusoApiResponse } from "../model/addressResponse"

export const useGetAddressListByKeyword = (
  keyword: string,
): UseQueryResult<JusoApiResponse, Error> => {
  console.log(keyword)
  return useQuery({
    queryKey: ["juso", keyword],
    queryFn: () => getJusoApi(keyword),
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
