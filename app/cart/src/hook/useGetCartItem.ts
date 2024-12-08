import { CartData } from "@/types/cart"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getCartData } from "../api/cart"

export const useGetCartItem = (): UseQueryResult<CartData & { totalItemsPrice: number }, Error> => {
  //TODO:에러 핸들링을 QueryClient에 작성해서 전역적으로 관리하기
  return useQuery({
    queryKey: ["CartData"],
    queryFn: getCartData,
    //장바구니 메뉴 가격 합산값
    select: (data) => ({
      ...data,
      totalItemsPrice: data.cartItems.reduce((sum, item) => sum + item.totalPrice, 0),
    }),
    staleTime: 1000,
    gcTime: 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
