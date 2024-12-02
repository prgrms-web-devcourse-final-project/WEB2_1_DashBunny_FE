import axios from "axios"

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    //    Cookie: "SESSION=MzE5OGFlYjYtMDk3MC00MGQzLTk3MDktY2QzZThlNjY0MzE2;",
  },
  //withCredentials: true,
})
