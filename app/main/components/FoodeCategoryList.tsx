"use client"
import React, { useState } from "react"

import { foodCategories } from "@/constants/FoodCategories"
import FoodListExtendsIcon from "@/components/icons/iconComponents/FoodListExtendsIcon"
import FoodCategoryButton from "@/app/src/components/FoodCategoryButton"
import { getCategoryIcon } from "@/components/icons/foodIconComponents"
export default function FoodCategoryList() {
  const [showMore, setShowMore] = useState(false)

  // 1~5번째 요소
  const tenCategories = foodCategories.slice(0, 4)

  // 6~12번째 요소
  const restCategories = foodCategories.slice(4, 12)

  // 처음에 보여줄 5개의 카테고리
  const initialBoxes = tenCategories.map((category, index) => {
    return (
      <FoodCategoryButton
        key={index}
        category={category.name}
        icon={getCategoryIcon(category.name)}
        searchParamCategory={category.key}
      />
    )
  })

  // 더보기 클릭 시 추가될 7개의 카테고리
  const additionalBoxes = restCategories.map((category, index) => (
    <FoodCategoryButton
      key={index}
      category={category.name}
      icon={getCategoryIcon(category.name)}
      searchParamCategory={category.key}
    />
  ))

  return (
    <div className="flex flex-col z-10 bg-white  ">
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
