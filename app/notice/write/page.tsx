"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import(`react-quill`), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const NoticeWrite = () => {
  const [value, setValue] = useState("");

  return <div></div>;
};

export default NoticeWrite;
