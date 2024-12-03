import { CouponType } from "@/types/types";
import { CreateCouponRequest } from "@/types/types";
import { CreateNotice } from "@/types/types";

//유저api
export async function fetchUsers() {
  //전체 유저 정보 불러오기
  try {
    const response = await fetch(
      "http://localhost:3000/api/user"
      // "http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/user"
    );
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
    // `http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/store?status=${status}&page=${page}&size=${size}`
  );
  return response.json();
}

export async function fetchShopById(storeID: string | null) {
  //단일 가게 정보 조회
  const response = await fetch(
    `/api/store/${storeID}`
    // 'http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/store/${storeID}'
  );
  return response.json();
}

export async function approveShop(storeID: string) {
  //가게 요청 승인
  await fetch(
    // `http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/store/approve/${storeID}`
    `api/store/approve/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function rejectShop(storeID: string, Reject_reason: string) {
  //가게 요청 거절
  await fetch(
    `http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/store/reject/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reason: Reject_reason }),
    }
  );
}

export async function approveClosureShop(storeID: string) {
  await fetch(
    // `http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/store/closure/approve/${storeID}`
    `/api/store/closure/approve/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

//쿠폰api
export async function fetchCoupon() {
  // 전체 쿠폰 정보 불러오기
  const response = await fetch(`api/admin/coupon`);
  // "http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/admin/coupon"

  return response.json();
}

export async function createCoupon(couponData: CreateCouponRequest) {
  //프론트 측에서 빈 값 못넘기도록 하자
  //쿠폰 생성(선착순 , 일반)
  await fetch(
    // "http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/admin/coupon"
    `/api/admin/coupon`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(couponData),
    }
  );
}

//공지api
export async function fetchNotice() {
  // 전체 공지 정보 불러오기
  const response = await fetch(`/api/notice`);
  // "http://aws-final-project-env-2.eba-vp8n66xx.us-east-1.elasticbeanstalk.com/api/notice"
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}

export async function fetchNoticeDetail(noticeId: string | number) {
  const response = await fetch(`/api/notice/${noticeId}`);
  return response.json();
}

export async function createNotice(content: CreateNotice) {
  await fetch("api/notice/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
}
