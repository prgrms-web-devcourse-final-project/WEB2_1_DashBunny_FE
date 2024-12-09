"use client";

import Image from "next/image";
import Link from "next/link";
import { NoticeType } from "@/types/types";
import { fetchNotice } from "@/lib/api";
import { useEffect, useState } from "react";

const Notice = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인
  const [noticeData, setNoticeData] = useState<NoticeType[]>();

  useEffect(() => {
    fetchNotice().then((data) => {
      setNoticeData(data);
    });
  }, []);

  const recentNoticeData = noticeData?.sort(
    (a: NoticeType, b: NoticeType) => b.noticeId - a.noticeId //최신순으로 정렬하기 위해
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <select className="border rounded-xl text-gray-500 p-2 w-full lg:w-48 shadow focus:outline-none">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
        </select>

        <div className="ml-0 lg:ml-2 flex border p-2 w-full items-center border-gray-300 rounded-xl shadow focus:outline-none">
          <Image
            src="/Icon/search.svg"
            alt="search icon"
            width={25}
            height={25}
          />
          <input
            placeholder="위치, 가게 이름으로 검색하세요."
            className="outline-none mx-2 w-full"
          />
        </div>
      </div>

      <div className={Line}></div>

      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl">전체 공지</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange">
            {noticeData?.length}
          </p>
          <Link href="/notice/write" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-colors transform duration-300 ease-in-out">
              공지 작성하기
            </button>
          </Link>
        </div>

        <div className="bg-slate-50 w-full h-10 border-b-2 border-gray-300 flex p-2">
          <p className="w-20 flex items-center justify-center text-sm 2xl:text-base font-bold text-gray-400">
            No
          </p>
          <p className="w-1/3 flex items-center justify-center text-sm 2xl:text-base font-bold text-gray-400">
            제목
          </p>
          <p className="w-1/3 flex items-center justify-center text-sm 2xl:text-base font-bold text-gray-400">
            공지 대상
          </p>
          <p className="w-1/3 flex items-center justify-center text-sm 2xl:text-base font-bold text-gray-400">
            작성일자
          </p>
          <p className="w-20 flex items-center justify-center text-sm 2xl:text-base font-bold text-gray-400">
            조회수
          </p>
        </div>

        <main className="w-full min-h-[68vh] border-b-4">
          {recentNoticeData &&
            recentNoticeData.map((notice, i) => (
              <Link href={`/notice/${notice.noticeId}`} key={notice.noticeId}>
                <div className="flex p-4 border-b-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                  <p className="w-20 flex items-center justify-center">
                    {i + 1}
                  </p>
                  <p className="w-1/3 flex items-center justify-center font-semibold text-lg text-gray-700">
                    {notice.noticeTitle}
                  </p>
                  <p className="w-1/3 flex items-center justify-center text-BunnyOrange">
                    {notice.target === "ENTIRE" && "전체"}
                    {notice.target === "OWNER" && "점주"}
                    {notice.target === "USER" && "유저"}
                  </p>
                  <p className="w-1/3 flex items-center justify-center text-gray-500">
                    {notice.createdDate}
                  </p>
                  <p className="w-20 flex items-center justify-center text-gray-500">
                    {notice.viewCount}
                  </p>
                </div>
              </Link>
            ))}
        </main>
      </section>
    </>
  );
};

export default Notice;
