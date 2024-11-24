"use client"
import React, { useState } from "react"

import { foodCategories } from "@/constants/FoodCategories"
import FoodListExtendsIcon from "@/components/icons/iconComponents/FoodListExtendsIcon"
import FoodCategoryButton from "@/app/src/components/FoodCategoryButton"
export default function FoodCategoryList() {
  const [showMore, setShowMore] = useState(false)

  // 1~10번째 요소
  const tenCategories = foodCategories.slice(0, 4)

  // 11~12번째 요소
  const restCategories = foodCategories.slice(4, 12)

  // 처음에 보여줄 10개의 상품 박스
  const initialBoxes = tenCategories.map((category, index) => (
    <FoodCategoryButton key={index} category={category.name} image={category.imageUrl} />
  ))

  // 더보기 클릭 시 추가될 2개의 상품 박스
  const additionalBoxes = restCategories.map((category, index) => (
    <FoodCategoryButton key={index} category={category.name} image={category.imageUrl} />
  ))

  return (
    <div className="flex flex-col z-10 bg-white border-b border-gray-200 ">
      <div className="flex-2 pt-4">
        <div className="grid grid-cols-5 gap-2">
          {initialBoxes}
          {showMore && additionalBoxes}
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className=" h-[82px] w-16 flex flex-col items-center justify-between "
            >
              <div className="h-[56px] w-[56px]  flex items-center justify-center">
                <FoodListExtendsIcon />
              </div>

              <div className="text-[14px] text-black-700 text-center font-bold">더보기</div>
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className=" h-[82px] w-16 flex flex-col items-center justify-between "
            >
              <div className="h-[56px] w-[56px]  flex items-center rotate-180 justify-center">
                <FoodListExtendsIcon />
              </div>

              <div className="text-[14px] text-black-700 text-center font-bold">접기</div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
