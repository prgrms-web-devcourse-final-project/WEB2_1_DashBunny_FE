import { CreateCouponRequest } from "@/types/types";
import { CreateNotice } from "@/types/types";
import { LoginType } from "@/types/types";

//유저api
//로그인
export async function Login(LoginForm: LoginType) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginForm),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to Login ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();
  const { accessToken, refreshToken } = data;

  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("refreshToken", refreshToken);

  return data;
}

//전체 유저 정보 불러오기
export async function fetchUsers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch users ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

//가게 api
// 전체 가게 정보 불러오기
export async function fetchShop(status: string, page: number, size: number) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/store?status=${status}&page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch store ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

//단일 가게 정보 조회
export async function fetchShopById(storeID: string | null) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/store/${storeID}`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch storeByID ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

//가게 요청 승인
export async function approveShop(storeID: string) {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/store/approve/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to approveShop ${response.status} ${response.statusText}`
    );
  }
}

//가게 요청 거절
export async function rejectShop(storeID: string, Reject_reason: string) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/store/reject/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify({ reason: Reject_reason }),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to rejectShop ${response.status} ${response.statusText}`
    );
  }
}

//폐업 신청 승인
export async function approveClosureShop(storeID: string) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/store/closure/approve/${storeID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to approveClosureShop ${response.status} ${response.statusText}`
    );
  }
}

//쿠폰api
// 전체 쿠폰 정보 불러오기
export async function fetchCoupon() {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/coupon`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch coupon ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

//쿠폰 생성(선착순 , 일반)
export async function createCoupon(couponData: CreateCouponRequest) {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/coupon`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
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

//쿠폰 상태 변경 api
export async function updateCouponStatus(couponId: number, status: string) {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/coupon/${couponId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify({ couponStatus: status }),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed change couponStatus ${response.status} ${response.statusText}`
    );
  }
}

//공지api
// 전체 공지 정보 불러오기
export async function fetchNotice() {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/notice`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch notice ${response.status} ${response.statusText}`
    );
  }
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}

//단일 공지 조회하기
export async function fetchNoticeDetail(noticeId: string | number) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/notice/id/${noticeId}`,
    {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch noticeDetail ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}

//공지 작성하기
export async function createNotice(content: CreateNotice) {
  const Token = sessionStorage.getItem("accessToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/notice/admin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(content),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to create notice ${response.status} ${response.statusText}`
    );
  }
}

//공지 삭제하기
export async function deleteNotice(noticeId: string) {
  const Token = sessionStorage.getItem("accessToken");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/notice/admin/${noticeId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to Delete notice ${response.status} ${response.statusText}`
    );
  }
}
