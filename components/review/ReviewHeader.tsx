import React from "react";
import Image from "next/image";

const ReviewHeader = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <section className="w-full">
      <header>
        <div className="flex items-center">
          <Image
            src="/Icon/review.svg"
            alt="shop icon"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-3xl font-bold mx-2">리뷰 관리</p>
        </div>
        <p className="mt-2">신고된 리뷰를 확인하고, 처리 할 수 있습니다.</p>
      </header>
      <div className={Line}></div>
    </section>
  );
};

export default ReviewHeader;
