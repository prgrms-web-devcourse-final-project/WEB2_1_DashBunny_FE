import { api } from "@/shared/axios/axiosInstance"
import { UsersStoreListResponseDto } from "@/types/Store"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getRestaurantListByCategory = async (
  category: string,
  address: string | null,
): Promise<UsersStoreListResponseDto[]> => {
  const response = await api.get<UsersStoreListResponseDto[]>(
    `/users/stores/${category}?address=${address}`,
  )
  return response.data
}
