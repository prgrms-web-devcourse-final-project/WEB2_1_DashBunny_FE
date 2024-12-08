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
      userName: "User1",
      content: "정말 나쁜 경험이었어요. 쓰레기 같아요.",
      isBlind: false,
    },
    {
      id: 2,
      userName: "User2",
      content: "맛은 괜찮았지만 서비스가 정말 형편없었어요.",
      isBlind: false,
    },
    {
      id: 3,
      userName: "User3",
      content: "최악의 음식이었어요. 다시는 오지 않을거에요.",
      isBlind: false,
    },
    {
      id: 4,
      userName: "User4",
      content: "아주 불쾌한 경험이었습니다. 다시는 가고 싶지 않네요.",
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
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-6">리뷰 관리</h1>

      <div className="w-full max-w-3xl bg-white p-6 border-2 rounded-xl shadow-lg">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="mb-4 p-4 border-b-2 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <p className="text-lg font-semibold">{review.userName}</p>
            <p
              className={`mt-2 text-md ${
                review.isBlind ? "blur-sm bg-white" : ""
              } transition duration-300`}
              style={{
                borderRadius: "5px",
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
