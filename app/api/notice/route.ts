import { NextResponse } from "next/server";

const mockNotice = [
  {
    noticeId: 1,
    noticeTitle: "공지 제목 1",
    createdDate: "2024-11-14T12:00:00",
    target: "ENTIRE",
    viewCount: 12,
  },
  {
    noticeId: 2,
    noticeTitle: "공지 제목2",
    createdDate: "2024-11-13T09:30:00",
    target: "USER",
    viewCount: 10,
  },
];

export async function GET() {
  return NextResponse.json(mockNotice); //응답을 생성한다!
}
