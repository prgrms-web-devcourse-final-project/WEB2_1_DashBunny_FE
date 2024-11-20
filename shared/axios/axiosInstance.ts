import axios from "axios"
import { Store } from "../model/restaurant"

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

// // 인터셉터 설정 (필요한 경우)
// api.interceptors.request.use(
//   (config) => {
//     // 요청 전 처리 (예: 토큰 추가)
//     const token = localStorage.getItem("token")
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )
