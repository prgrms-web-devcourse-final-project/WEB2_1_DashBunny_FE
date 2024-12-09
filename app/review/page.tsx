"use client";

import React, { useState } from "react";

type ReviewType = {
  id: number;
  userName: string;
  content: string;
  isBlind: boolean;
};

const Review = () => {
  const initialReviews: ReviewType[] = [
    {
      id: 1,
      userName: "김지연",
      content: "개 쓰레기 같은 맛;; 다시는 가지마라 ㅗㅗ",
      isBlind: false,
    },
    {
      id: 2,
      userName: "이지선",
      content: "그지 같다 진짜.",
      isBlind: false,
    },
    {
      id: 3,
      userName: "한승진",
      content: "ㅅㅂ 이딴거 누가 먹냐 먹어보고 장사해라.",
      isBlind: false,
    },
    {
      id: 4,
      userName: "지연주",
      content:
        "극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐극혐.",
      isBlind: false,
    },
    {
      id: 5,
      userName: "하진우",
      content: "ㅈ같음.",
      isBlind: false,
    },
    {
      id: 6,
      userName: "김성욱",
      content: "죽어라 걍.",
      isBlind: false,
    },
  ];

  const [reviews, setReviews] = useState<ReviewType[]>(initialReviews);

  const handleBlind = (id: number) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, isBlind: !review.isBlind } : review
      )
    );
  };

  return (
    <div className=" flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-6 text-BunnyOrange border-2 w-[70vw] text-center p-5 shadow-xl rounded-xl">
        신고된 리뷰 관리
      </h1>

      <div className="w-[70vw] bg-white p-6 border-2 rounded-xl shadow-lg overflow-y-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="mb-4 p-4 border-b-2 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <p className="text-lg font-semibold">{review.userName}</p>
            <p
              className={`mt-2 text-xl ${
                review.isBlind ? "blur-sm bg-white" : ""
              } transition duration-300`}
              style={{
                borderRadius: "5px",
                whiteSpace: "normal", // 텍스트가 줄 바꿈 되도록 설정
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {review.content}
            </p>
            <button
              className="mt-4 bg-BunnyOrange text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:bg-orange-600 transition duration-300"
              onClick={() => handleBlind(review.id)}
            >
              {review.isBlind ? "복원하기" : "블라인드 처리"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
