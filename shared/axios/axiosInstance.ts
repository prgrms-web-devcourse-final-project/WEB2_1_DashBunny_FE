import axios from "axios"

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
})
//http://dashbunny-web-env-1.eba-aehpeuj2.ap-northeast-2.elasticbeanstalk.com/api
