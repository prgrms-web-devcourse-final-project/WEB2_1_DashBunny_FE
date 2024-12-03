import { NextResponse } from "next/server";

const mockShops = [
  {
    storeId: 2,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
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
    storeId: 3,
    userId: 1,
    operationId: 1,
    storeName: "BHC치킨 서울 신촌점", //가게 이름
    storeStatus: "PENDING", //가게 상태
    description: "BHC! 잘부탁드립니다!", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo:
      "https://www.foodbank.co.kr/news/photo/202302/63752_22197_030.jpg",
    Field: "", //가게 배너 이미지
    address: "서울특별시 서대문구 연세로4길 34",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },

  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "족발야시장", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "", //가게 소개
    contactNumber: "",
    storeLogo:
      "https://ceo-cdn.baemin.com/cdn/static/images/expo/47/representative_img.jpg",
    Field: "", //가게 배너 이미지
    address: "인천광역시 미추홀구 독배로 384-1",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },

  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "노랑통닭", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "", //가게 소개
    contactNumber: "",
    storeLogo: "https://foodfile.co.kr/_var/1601/20160116_201726__16x9.jpg",
    Field: "", //가게 배너 이미지
    address: "인천공항",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "치킨공주 피자나라", //가게 이름
    storeStatus: "CLOSE", //가게 상태
    description: "", //가게 소개
    contactNumber: "",
    storeLogo:
      "https://i.namu.wiki/i/iUn_cE_exd0gZvinDH3zRDpf_6m0TMgR7gWgIuiKzpnqf3t4sp2k3RizlFpVZO7A5S0HcSdTud3gUhbwtjsXkg.svg",
    Field: "", //가게 배너 이미지
    address: "서울특별시 마포구",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "BHC", //가게 이름
    storeStatus: "CLOSE", //가게 상태
    description: "", //가게 소개
    contactNumber: "",
    storeLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsAC9HlqwAgIgfFWldooF2T2OpuyBCn9hxTE7KPjbMFkPv59aBfie5t4-BnmLmDg1i2I&usqp=CAU",
    Field: "", //가게 배너 이미지
    address: "인천광역시 미추홀구 미추홀길 1123",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
];

export async function GET() {
  return NextResponse.json(mockShops);
}
