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
// interface PriceInfo {
//   totalPrice: number
//   deliveryFee: number
//   discount: number
// }
// export const useGetCartTotalAmountFromCache = (): UseQueryResult<, Error> => {

//   const { data } = useCartQuery({
//     select: (data) => ({
//       totalPrice: data.totalPrice,
//       deliveryFee: data.deliveryFee,
//       discount: data.discount
//     })
//   })
// }
// export const useGetCartItem = () => {
//   const { data, isLoading, isError } = useQuery<CartData>({
//     queryKey: ["CartData"],
//     queryFn: getCartData,
//     staleTime: 1000,
//     gcTime: 1000,
//     retry: 1,
//     refetchOnWindowFocus: false,
//   })
//   return { data, isLoading, isError }
// }
