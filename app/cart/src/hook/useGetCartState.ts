import { CartData } from "@/types/cart"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getCartState } from "../api/getCartState"

export const useDetailStoreData = (): UseQueryResult<CartData, Error> => {
  return useQuery({
    queryKey: ["CartData"],
    queryFn: getCartState,
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
