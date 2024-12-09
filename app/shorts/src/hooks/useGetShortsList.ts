import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getShortsData } from "../api/shorts"
import { ShortsResponse } from "../types/shortsData"
const SHORTS_QUERY_KEY = ["Shorts"] as const

export const useGetShortsList = (): UseQueryResult<ShortsResponse[], Error> => {
  return useQuery({
    queryKey: [SHORTS_QUERY_KEY],
    queryFn: getShortsData,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
