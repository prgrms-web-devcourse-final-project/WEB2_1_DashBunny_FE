import { NextResponse } from "next/server";

const mockShops = [
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
];

export async function GET() {
  return NextResponse.json(mockShops);
}
