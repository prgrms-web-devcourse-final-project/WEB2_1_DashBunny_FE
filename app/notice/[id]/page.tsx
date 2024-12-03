"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchNoticeDetail } from "@/lib/api";
import { NoticeType } from "@/types/types";

const NoticeDetail = () => {
  const [noticeData, setNoticeData] = useState<NoticeType>();

  const { id } = useParams();
  useEffect(() => {
    fetchNoticeDetail(id as string)
      .then((data) => {
        setNoticeData(data);
      })
      .catch((error) => {
        console.log(error);
        alert("문제가 발생했습니다. 다시 시도하세요.");
      });
  }, [id]);

  return (
    <div className="border-y-2 min-h-[80vh]">
      <header className="bg-slate-50 w-full h-10 border-b-2 border-gray-300 flex p-2">
        <Link href="/notice">
          <button className="font-bold">뒤로 가기</button>
        </Link>
      </header>
      <article className="p-5 inline-block">
        <div className="font-bold text-3xl mb-3 inline-block">
          {noticeData?.noticeTitle}
        </div>
        <div className="flex justify-end gap-10">
          <p>{noticeData?.target} 공지</p>
          <p>조회수:{noticeData?.viewCount}</p>
          <p>{noticeData?.createdDate}</p>
        </div>
      </article>
      <article className="text-2xl p-10">{noticeData?.noticeContent}</article>
    </div>
  );
};

export default NoticeDetail;
