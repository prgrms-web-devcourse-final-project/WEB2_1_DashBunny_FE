import { Store } from "@/shared/model/restaurant"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getRestaurantListByCategory } from "../api/restaurantList"

export const useGetRestaurantListByCategory = (): UseQueryResult<Store[], Error> => {
  return useQuery({
    queryKey: ["restaurantList"],
    queryFn: getRestaurantListByCategory,
    staleTime: 1000, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: true,
  })
}
