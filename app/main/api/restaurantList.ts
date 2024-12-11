import { api } from "@/shared/axios/axiosInstance"
import { UsersStoreListResponseDto } from "@/types/Store"
// API 에러 타입
interface ApiError {
  message: string
  code: string
}
export const getRestaurantListByCategory = async (
  category: string,
  address: string,
): Promise<UsersStoreListResponseDto[]> => {
  const response = await api.get<UsersStoreListResponseDto[]>(
    `/users/stores/${category}?address=서울특별시 중구 세종대로 110`,
  )
  return response.data
}
