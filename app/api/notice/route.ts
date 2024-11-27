import { NextResponse } from "next/server";

const mockNotice = [
  [
    {
      noticeId: 1,
      noticeTitle: "공지 제목 1",
      createdDate: "2024-11-14T12:00:00",
      target: "ENTIRE",
      viewCont: 0,
    },
    {
      noticeId: 2,
      noticeTitle: "공지 제목2",
      createdDate: "2024-11-13T09:30:00",
      target: "USER",
      viewCont: 0,
    },
  ],
];

export async function Get() {
  return NextResponse.json(mockNotice);
}
