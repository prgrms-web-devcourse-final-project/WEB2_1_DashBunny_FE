//유저api
export async function fetchUsers() {
  //전체 유저 정보 불러오기
  const response = await fetch("http://localhost:3000/api/user");
  return response.json();
}

//가게 api
export async function fetchShop() {
  // 전체 가게 정보 불러오기
  const response = await fetch("/api/store");
  return response.json();
}

export async function fetchShopById(storeID: String | null) {
  //단일 가게 정보 조회
  const response = await fetch(`api/store/${storeID}`);
  return response.json();
}

export async function approveShop(storeID: String) {
  //가게 요청 승인
  const response = await fetch(`api/store/approve/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function rejectShop(storeID: String, reason: String) {
  //가게 요청 거절
  const response = await fetch(`api/store/reject/${storeID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reason: reason }),
  });
}

//쿠폰api
export async function fetchCoupon() {
  // 전체 쿠폰 정보 불러오기
  const response = await fetch("http://localhost:3000/api/coupon");
  return response.json();
}

//공지api
export async function fetchNotice() {
  // 전체 공지 정보 불러오기
  const response = await fetch("/api/notice");
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}
