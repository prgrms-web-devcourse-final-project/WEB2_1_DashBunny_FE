"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchNoticeDetail } from "@/lib/api";
import { NoticeType } from "@/types/types";
import DOMPurify from "dompurify";
import { deleteNotice } from "@/lib/api";
import { useRouter } from "next/navigation";

const NoticeDetail = () => {
  const [noticeData, setNoticeData] = useState<NoticeType>();
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

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

  const handleDeleteNotice = async (noticeId: string) => {
    try {
      const reponse = await deleteNotice(noticeId);
      router.push("/notice");
    } catch (error) {
      console.log(error);
    }
  };

  const sanitizedContent = DOMPurify.sanitize(
    noticeData?.noticeContent || "내용이 없습니다."
  );

  return (
    <div className="border-y-2 min-h-[80vh]">
      <header className="bg-slate-50 w-full h-10 border-b-2 border-gray-300 flex p-2 justify-between">
        <Link href="/notice">
          <button className="font-bold transition hover:text-BunnyOrange">
            뒤로 가기
          </button>
        </Link>
        <div>
          <button className="mx-5 font-bold hover:text-BunnyOrange">
            수정
          </button>
          <button
            className="mx-5 font-bold text-red-600 hover:text-BunnyOrange"
            onClick={() => setDeleteModal(true)} // 모달 열기
          >
            삭제
          </button>
        </div>
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
      <article
        className="text-2xl p-10"
        dangerouslySetInnerHTML={{
          __html: sanitizedContent,
        }}
      ></article>

      {deleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-80">
            <h2 className="text-lg font-bold text-center mb-4">
              정말로 삭제하시겠습니까?
            </h2>
            <div className="flex justify-around">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                onClick={() => handleDeleteNotice(id as string)}
              >
                삭제
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setDeleteModal(false)} // 모달 닫기
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeDetail;
