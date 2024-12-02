import { NextResponse } from "next/server";

const mockNotice = [
  {
    noticeId: 1,
    noticeTitle: "서비스 점검 안내",
    createdDate: "2024-11-14T12:00:00",
    target: "ENTIRE",
    viewCount: 12,
  },
  {
    noticeId: 2,
    noticeTitle: "신규 기능 업데이트",
    createdDate: "2024-11-13T09:30:00",
    target: "USER",
    viewCount: 10,
  },
  {
    noticeId: 3,
    noticeTitle: "관리자 시스템 점검",
    createdDate: "2024-11-12T18:45:00",
    target: "ADMIN",
    viewCount: 8,
  },
  {
    noticeId: 4,
    noticeTitle: "이용약관 변경 안내",
    createdDate: "2024-11-10T15:20:00",
    target: "ENTIRE",
    viewCount: 25,
  },

  {
    noticeId: 6,
    noticeTitle: "보안 강화 작업 공지",
    createdDate: "2024-11-08T16:30:00",
    target: "ENTIRE",
    viewCount: 20,
  },
  {
    noticeId: 7,
    noticeTitle: "고객센터 운영 시간 변경",
    createdDate: "2024-11-07T11:15:00",
    target: "USER",
    viewCount: 15,
  },
  {
    noticeId: 8,
    noticeTitle: "관리자 권한 설정 업데이트",
    createdDate: "2024-11-06T14:50:00",
    target: "ADMIN",
    viewCount: 5,
  },
  {
    noticeId: 9,
    noticeTitle: "주문 취소 정책 변경",
    createdDate: "2024-11-05T13:25:00",
    target: "ENTIRE",
    viewCount: 18,
  },
];

export async function GET() {
  return NextResponse.json(mockNotice); //응답을 생성한다!
}
