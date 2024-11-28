export async function fetchUsers() {
  //전체 유저 정보 불러오기
  const response = await fetch("http://localhost:3000/api/user");
  return response.json();
}

export async function fetchShop() {
  // 전체 샵 정보 불러오기
  const response = await fetch("/api/shop");
  return response.json();
}

export async function fetchCoupon() {
  // 전체 쿠폰 정보 불러오기
  const response = await fetch("http://localhost:3000/api/coupon");
  return response.json();
}

export async function fetchNotice() {
  // 전체 공지 정보 불러오기
  const response = await fetch("/api/notice");
  return response.json(); //response 객체에서 body 부분을 json 객체로 가져온다
}

export async function fetchShopById(shopID: String | null) {
  //단일 가게 정보 조회
  const response = await fetch(`api/shop/${shopID}`);
  return response.json();
}
