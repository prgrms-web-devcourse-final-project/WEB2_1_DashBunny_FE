import { NextResponse } from "next/server";

const mockShops = [
  {
    storeId: 1,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 2,
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
    storeId: 3,
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
    storeId: 4,
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
    storeId: 5,
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
    storeId: 6,
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
  {
    storeId: 7,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 8,
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
    storeId: 9,
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
    storeId: 10,
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
    storeId: 11,
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
    storeId: 12,
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
  {
    storeId: 13,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 14,
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
    storeId: 15,
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
    storeId: 16,
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
    storeId: 17,
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
    storeId: 18,
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
  {
    storeId: 19,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 20,
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
    storeId: 21,
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
    storeId: 22,
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
    storeId: 23,
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
    storeId: 24,
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
  {
    storeId: 25,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 26,
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
    storeId: 27,
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
    storeId: 28,
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
    storeId: 29,
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
  {
    storeId: 30,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 31,
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
    storeId: 32,
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
    storeId: 33,
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
    storeId: 34,
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
  {
    storeId: 35,
    userId: 1,
    operationId: 1,
    storeName: "동대문 엽기떡볶이 본점", //가게 이름
    storeStatus: "OPEN", //가게 상태
    description: "동대문 엽기떡볶이 본점입니다! ", //가게 소개
    contactNumber: "010-1234-5678",
    storeLogo: "",
    Field: "", //가게 배너 이미지
    address: "서울특별시 동대문구 장안제2동 장한로 155",
    location: "", //위도 경도
    storeRegistrationDocs: "",
    approvedDate: "2024-11-15",
  },
  {
    storeId: 36,
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
    storeId: 37,
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
    storeId: 38,
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
];

export async function GET(request) {
  // 쿼리 파라미터에서 page, size, status 값을 추출하기
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10); // 기본값은 1
  const size = parseInt(url.searchParams.get("size") || "5", 10); // 기본값은 5
  const status = url.searchParams.get("status"); // status 값을 쿼리에서 추출 (없으면 null)

  // status 필터링 처리
  let filteredShops = mockShops;
  // if (status) {
  //   filteredShops = filteredShops.filter((shop) => shop.storeStatus === status);
  // }

  // 페이지네이션 계산
  const totalItems = filteredShops.length;
  const totalPages = Math.ceil(totalItems / size);
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const pageData = filteredShops.slice(startIndex, endIndex);

  // 결과 데이터 구조 맞추기
  return NextResponse.json({
    content: pageData,
    pageable: {
      sort: {
        sorted: false,
        unsorted: true,
        empty: false,
      },
      offset: startIndex,
      pageSize: size,
      pageNumber: page,
      paged: true,
      unpaged: false,
    },
    totalPages: totalPages,
    totalElements: totalItems,
    last: page === totalPages,
    size: size,
    number: page,
    sort: {
      sorted: false,
      unsorted: true,
      empty: false,
    },
    numberOfElements: pageData.length,
    first: page === 1,
    empty: pageData.length === 0,
  });
}
