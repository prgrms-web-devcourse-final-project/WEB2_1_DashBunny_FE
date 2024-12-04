import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getJusoApi } from "../api/getJusoApi"
import { JusoApiResponse } from "../model/addressResponse"

export const useGetAddressListByKeyword = (
  keyword: string,
): UseQueryResult<JusoApiResponse, Error> => {
  return useQuery({
    queryKey: ["juso", keyword],
    queryFn: () => getJusoApi(keyword),
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
