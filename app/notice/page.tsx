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

  useEffect(() => {
    console.log(noticeData);
  }, [noticeData]);

  return (
    <>
      <div className="flex">
        <select className="border rounded-xl text-gray-500 p-2 w-48 shadow">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
        </select>

        <div className="ml-2 flex border p-2 w-full items-center border-gray-300 rounded-xl shadow">
          <Image
            src="/Icon/search.svg"
            alt="search icon"
            width={25}
            height={25}
          />
          <input
            placeholder="위치, 가게 이름으로 검색하세요."
            className="outline-none mx-2 w-1/2"
          />
        </div>
      </div>
      <div className={Line}></div>

      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl ">전체 공지</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange">
            {" "}
            {noticeData?.length}
          </p>
          <Link href="/notice/write" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-color transform duration-300 ease-in-out">
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
          {noticeData &&
            noticeData.map((notice, i) => (
              <div className="flex p-2 border-b-2">
                <p className="w-20 flex items-center justify-center">{i + 1}</p>
                <p className="w-1/3 flex items-center justify-center font-bold">
                  {notice.noticeTitle}
                </p>
                <p className="w-1/3 flex items-center justify-center">
                  {notice.target}
                </p>
                <p className="w-1/3 flex items-center justify-center">
                  {notice.createdDate}
                </p>
                <p className="w-20 flex items-center justify-center">
                  {notice.viewCount}
                </p>
              </div>
            ))}
        </main>
      </section>
    </>
  );
};

export default Notice;
