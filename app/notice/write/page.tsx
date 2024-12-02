"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Link from "next/link";
import { CreateNotice, NoticeType } from "@/types/types";
import { createNotice } from "@/lib/api";

const QuillNoSSRWrapper = dynamic(() => import(`react-quill-new`), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const NoticeWrite = () => {
  const [formdata, setFormdata] = useState<CreateNotice>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormdata(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as CreateNotice)
    );
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-full flex mb-10 border-2 rounded-xl">
        <input
          className="w-full  text-2xl p-5 rounded-xl outline-none"
          placeholder="Title"
          name="noticeTitle"
          onChange={handleInputChange}
        />
        <select
          name="target"
          className="rounded-xl outline-none font-bold p-2 text-xl text-BunnyOrange"
          onChange={handleInputChange}
          value={formdata?.target}
        >
          <option value="ENTIRE">전체</option>
          <option value="USER">손님</option>
          <option value="OWNER">점주</option>
        </select>
      </div>

      <div className=" w-full">
        <QuillNoSSRWrapper
          theme="snow"
          value={formdata?.noticeContent}
          style={{ height: "60vh" }}
          onChange={(value) =>
            setFormdata(
              (prev) =>
                ({
                  ...prev,
                  noticeContent: value,
                } as CreateNotice)
            )
          }
        />
      </div>
      <div className="flex justify-end w-full mt-20 gap-10 p-2">
        <Link href="/notice">
          <button className="border-2 shadow p-5 rounded-xl font-bold">
            취소하기
          </button>
        </Link>
        <button
          className="border-2 shadow p-5 rounded-xl font-bold"
          onClick={() => createNotice(formdata as CreateNotice)}
        >
          공지작성
        </button>
      </div>
    </div>
  );
};

export default NoticeWrite;
