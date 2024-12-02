import { NextResponse } from "next/server";

const mockNoticeDetail = {
  noticeId: 1,
  noticeTitle: "공지 제목 1",
  noticeContent: "이 공지의 상세 내용입니다.",
  createdDate: "2024-11-14T12:00:00",
  target: "USER",
  viewCount: 250,
};

export async function GET() {
  return NextResponse.json(mockNoticeDetail); //응답을 생성한다!
}
