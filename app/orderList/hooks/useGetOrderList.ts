import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getOrderList } from "../api/orderList"
import { Order } from "../model/order"

export const useGetWishList = (): UseQueryResult<Order[], Error> => {
  return useQuery({
    queryKey: ["orderList"],
    queryFn: getOrderList,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
