import axios from "axios"

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    //@=>NextAuth 적용
    // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
})
// 토큰을 동적으로 설정하는 인터셉터 추가
api.interceptors.request.use((config) => {
  // 클라이언트 사이드에서만 localStorage 접근
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export const loginApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
})
