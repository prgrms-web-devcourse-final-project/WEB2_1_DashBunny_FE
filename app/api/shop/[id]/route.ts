import { NextResponse } from "next/server";

const mockShopsByID = {
  storeId: "TSID-1731993445512", //가게 아이디
  storeName: "맛있는 가게", //가게 이름
  contactNumber: "010-1234-5678", //가게 연락처
  address: "서울특별시 강남구 테헤란로 123", //가게 주소
  description: "최고의 맛을 제공합니다.", //가게 소개
  latitude: 37.5665, //위도
  longitude: 126.978, //경도
  storeRegistrationDocs: "사업자 등록증url", //등록서류(이미지 url)
  categories: ["FOOD", "BEVERAGE"], //가게 카테고리 (리스트로 최대 3개까지)
  storeBannerImage:
    "https://i.namu.wiki/i/IpxvfUYFs51Hxzq7j5cO505dVXpqgBkiIG1R4t-OQfrXlOlSIEQiBdzPy-4cZ5IecSzDXECQZy6hvUdkdEbW7uK6zz2zwmPlAHA1LWTbnMtnNKLV7Oh-8M1YePoFzmhyeYNIr9XcdGuJlXWTzAD59g.webp", //단일 조회시 보이는 배너 사진입니다.(이미지 url)
  storeStatus: "REGISTERED", //가게 상태
  userName: "박장사", //사장님 이름
};

export async function GET() {
  return NextResponse.json(mockShopsByID);
}
