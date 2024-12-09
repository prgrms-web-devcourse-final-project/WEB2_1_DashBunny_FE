import { api } from "@/shared/axios/axiosInstance"
import { ShortsResponse } from "../types/shortsData"
import { shortsDummyData } from "@/mock/data/ShortsData"
//TODO: api키 한 곳에서 관리하기
export const getShortsData = async (): Promise<ShortsResponse[]> => {
  // const response = await api.get<ShortsResponse[]>("/user/shorts/nearby-store")
  // return response.data
  return shortsDummyData
}
