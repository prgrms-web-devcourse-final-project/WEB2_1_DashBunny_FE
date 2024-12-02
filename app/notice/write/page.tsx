"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import(`react-quill-new`), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const NoticeWrite = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <input
        className="w-full  text-2xl p-5 border-2 rounded-xl mb-10"
        placeholder="Title"
      />

      <div className=" w-full">
        <QuillNoSSRWrapper
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ height: "60vh" }}
        />
      </div>
    </div>
  );
};

export default NoticeWrite;
