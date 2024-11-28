import { CouponType } from "@/types/types";

//유저api
export async function fetchUsers() {
  //전체 유저 정보 불러오기
  try {
    const response = await fetch("http://localhost:3000/api/user");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//가게 api
export async function fetchShop(status: string, page: number, size: number) {
  // 전체 가게 정보 불러오기
  const response = await fetch(
    `/api/store?status=${status}&page=${page}&size=${size}`
  );
  return response.json();
}

export async function fetchShopById(storeID: string | null) {
  //단일 가게 정보 조회
  const response = await fetch(`/api/store/${storeID}`);
  return response.json();
}

export async function approveShop(storeID: string) {
  //가게 요청 승인
  await fetch(`/api/store/approve/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function rejectShop(storeID: string, reason: string) {
  //가게 요청 거절
  await fetch(`http://localhost:8080/api/store/reject/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reason: reason }),
  });
}

export async function approveClosureShop(storeID: string) {
  await fetch(`/api/store/closure/approve/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//쿠폰api
export async function fetchCoupon() {
  // 전체 쿠폰 정보 불러오기
  const response = await fetch("/api/admin/coupon");
  return response.json();
}

export async function createCoupon(couponData: CouponType) {
  //쿠폰 생성(선착순 , 일반)
  await fetch("/api/admin/coupon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(couponData),
  });
}

//공지api
export async function fetchNotice() {
  // 전체 공지 정보 불러오기
  const response = await fetch("/api/notice");
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}
