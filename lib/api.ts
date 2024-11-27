export async function fetchUsers() {
  const response = await fetch("http://localhost:3000/api/user");
  return response.json();
}

export async function fetchShop() {
  const response = await fetch("/api/shop");
  return response.json();
}

export async function fetchCoupon() {
  const response = await fetch("http://localhost:3000/api/coupon");
  return response.json();
}

export async function fetchNotice() {
  const response = await fetch("http://localhost:3000/api/coupon");
  return response.json();
}
