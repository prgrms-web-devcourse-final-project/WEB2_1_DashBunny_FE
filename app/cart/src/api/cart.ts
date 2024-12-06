import { api } from "@/shared/axios/axiosInstance"
import { CartData } from "@/types/cart"

//장바구니 데이터 가져오기
export const getCartData = async (): Promise<CartData> => {
  const response = await api.get<CartData>(`/users/carts`)
  return response.data
}

//장바구니에 메뉴 추가
export interface PostCartDto {
  menuId: number
  quantity: number
}
export const postCartData = async ({ menuId, quantity }: PostCartDto): Promise<CartData> => {
  const { data } = await api.post<CartData>(`/users/items?menuId=${menuId}&quantity=${quantity}`)
  return data
}

//장바구니 메뉴 수량 변경
interface updateCartDto {
  menuId: number
  quantity: number
}
export const updateCartData = async ({ menuId, quantity }: updateCartDto): Promise<CartData> => {
  const { data } = await api.patch<CartData>(
    `/users/items/${menuId}?menuId=${menuId}&quantity=${quantity}`,
  )
  return data
}

/**가게 다를 시 confirm후 결과 전송. 기존 장바구니를 삭제하고 새로운 가게의 메뉴를 추가하던가,
 * 메뉴 추가를 취소하던가.
 */
interface updateCartDataWithOverWriteDto extends updateCartDto {
  overwrite: boolean
}
export const addCartDataWithOverwrite = async ({
  menuId,
  quantity,
  overwrite,
}: updateCartDataWithOverWriteDto): Promise<CartData> => {
  const { data } = await api.post<CartData>(
    `/users/items?menuId=${menuId}&quantity=${quantity}&overwrite=${overwrite}`,
  )
  return data
}
