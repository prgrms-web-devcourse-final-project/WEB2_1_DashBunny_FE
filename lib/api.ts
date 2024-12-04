import { CouponType } from "@/types/types";
import { CreateCouponRequest } from "@/types/types";
import { CreateNotice } from "@/types/types";

//유저api
export async function fetchUsers() {
  //전체 유저 정보 불러오기
  const response = await fetch("http://localhost:3000/api/user");
  if (!response.ok) {
    throw new Error(
      `Failed to fetch users ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

//가게 api
export async function fetchShop(status: string, page: number, size: number) {
  // 전체 가게 정보 불러오기
  const response = await fetch(
    `/api/store?status=${status}&page=${page}&size=${size}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch store ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function fetchShopById(storeID: string | null) {
  //단일 가게 정보 조회
  const response = await fetch(`/api/store/${storeID}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch storeByID ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function approveShop(storeID: string) {
  //가게 요청 승인
  const response = await fetch(`api/store/approve/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to approveShop ${response.status} ${response.statusText}`
    );
  }
}

export async function rejectShop(storeID: string, Reject_reason: string) {
  //가게 요청 거절
  const response = await fetch(`/api/store/reject/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reason: Reject_reason }),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to rejectShop ${response.status} ${response.statusText}`
    );
  }
}

export async function approveClosureShop(storeID: string) {
  const response = await fetch(`/api/store/closure/approve/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to approveClosureShop ${response.status} ${response.statusText}`
    );
  }
}

//쿠폰api
export async function fetchCoupon() {
  // 전체 쿠폰 정보 불러오기
  const response = await fetch(`api/admin/coupon`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch coupon ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function createCoupon(couponData: CreateCouponRequest) {
  //프론트 측에서 빈 값 못넘기도록 하자
  //쿠폰 생성(선착순 , 일반)
  const response = await fetch(
    `/api/admin/coupon`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(couponData),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to create Coupon ${response.status} ${response.statusText}`
    );
  }
}

//공지api
export async function fetchNotice() {
  // 전체 공지 정보 불러오기
  const response = await fetch(`/api/notice`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch notice ${response.status} ${response.statusText}`
    );
  }
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}

export async function fetchNoticeDetail(noticeId: string | number) {
  const response = await fetch(`/api/notice/${noticeId}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch noticeDetail ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

export async function createNotice(content: CreateNotice) {
  const response = await fetch("api/notice/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to create notice ${response.status} ${response.statusText}`
    );
  }
}
