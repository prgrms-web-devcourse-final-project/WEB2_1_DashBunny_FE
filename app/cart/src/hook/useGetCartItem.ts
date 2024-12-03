import { CartData } from "@/types/cart"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getCartData } from "../api/cart"

export const useGetCartItem = (): UseQueryResult<CartData, Error> => {
  return useQuery({
    queryKey: ["CartData"],
    queryFn: getCartData,
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
