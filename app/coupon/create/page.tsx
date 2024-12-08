"use client";

import { useEffect, useState } from "react";
import { createCoupon } from "@/lib/api";

const CreateCoupon = () => {
  const [formData, setFormData] = useState({
    couponName: " ",
    couponDescription: " ",
    couponType: "Regula",
    discountPrice: 0,
    discountType: "FIXED",
    minOrderPrice: 0,
    expiredDate: " ",
    maximumDiscount: null, // 선착순 쿠폰일때 생기는 값
    downloadStartDate: null, // 선착순 쿠폰일때 생기는 값
    maxIssuance: null, //선착순 쿠폰일때 생기는 값
  });

  const CouponTypeButton = "border p-3 w-1/3 rounded-xl bg-gray-300";
  const FontStyle = "mr-auto font-semibold mb-1 text-lg";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <p className="text-BunnyOrange font-semibold text-2xl">쿠폰 생성하기</p>
      <main className="flex flex-col items-center h-[900px] overflow-y-auto">
        <section className="flex flex-col w-2/3 items-center">
          <p className={FontStyle}>쿠폰 이름</p>
          <input
            name="couponName"
            className="border w-full h-12 rounded-xl p-2 outline-none"
            onChange={handleInputChange}
          />
        </section>
        <section className="flex flex-col w-2/3 items-center my-10">
          <p className={FontStyle}>쿠폰 설명</p>
          <input
            name="couponDescription"
            className="border w-full h-12 rounded-xl p-2 outline-none"
            onChange={handleInputChange}
          />
        </section>
        {/* 쿠폰 유형 선택 */}
        <section className="flex flex-col w-2/3 items-center my-10">
          <p className={FontStyle}>쿠폰 유형 선택</p>
          <div className="flex w-full gap-32 items-center justify-center">
            <button
              name="couponType"
              className={CouponTypeButton}
              onClick={() => handleButtonClick("couponType", "Regula")}
            >
              일반 쿠폰
            </button>
            <button
              name="couponType"
              className={CouponTypeButton}
              onClick={() => handleButtonClick("couponType", "FirstCome")}
            >
              선착순 쿠폰
            </button>
          </div>
        </section>
        {/* 쿠폰 할인 금액과 최수 주문 금액 */}
        <section className="flex w-2/3 my-10">
          <div className="w-full flex flex-col items-center">
            <p className={FontStyle}>할인 금액</p>
            <div className="w-full flex justify-between border h-12 rounded-xl p-2">
              <input
                name="discountPrice"
                className="w-11/12 outline-none"
                onChange={handleInputChange}
              />
              <select
                name="discountType"
                className="outline-none text-center font-bold border-l-2  w-20 text-gray-500"
                onChange={handleInputChange}
                value={formData.discountType}
              >
                <option value="FIXED">KRW</option>
                <option value="PERCENT">%</option>
              </select>
            </div>
          </div>
        </section>
        {formData.discountType === "PERCENT" && (
          <section className="flex w-2/3 my-10">
            <div className="w-full">
              <p className={FontStyle}>최대 할인 금액</p>
              <div className="flex items-center border h-12 rounded-xl p-2 justify-between">
                <input
                  name="maximumDiscount"
                  className="h-full outline-none w-11/12"
                  onChange={handleInputChange}
                />
                <p className="border-l-2 w-20 h-7 text-center flex items-center justify-center font-bold text-gray-500">
                  원
                </p>
              </div>
            </div>
          </section>
        )}
        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>최소 주문 금액</p>
            <div className="flex items-center border h-12 rounded-xl p-2 justify-between">
              <input
                name="minOrderPrice"
                className="h-full outline-none w-11/12"
                onChange={handleInputChange}
              />
              <p className="border-l-2 w-20 h-7 text-center flex items-center justify-center font-bold text-gray-500">
                원 이상
              </p>
            </div>
          </div>
        </section>
        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>쿠폰 만료 기한</p>
            <input
              name="expiredDate"
              type="datetime-local"
              className="border w-full h-12 rounded-xl p-2"
              onChange={handleInputChange}
            />
          </div>
        </section>

        {formData.couponType === "FirstCome" && (
          <>
            <section className="flex w-2/3 my-10">
              <div className="w-full">
                <p className={FontStyle}>쿠폰 다운로드 시작일</p>
                <input
                  name="downloadStartDate"
                  type="datetime-local"
                  className="border w-full h-12 rounded-xl p-2"
                  onChange={handleInputChange}
                />
              </div>
            </section>

            <section className="flex w-2/3 my-10">
              <div className="w-full">
                <p className={FontStyle}>발급 한도</p>
                <div className="w-full flex border h-12 rounded-xl justify-between items-center p-2">
                  <input
                    name="maxIssuance"
                    className="outline-none w-11/12"
                    onChange={handleInputChange}
                  />
                  <p className="items-center justify-center w-12 font-bold h-12 flex text-gray-500">
                    장
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        <div className="flex justify-center items-center my-10">
          <button
            className="bg-BunnyOrange p-2 w-96 rounded-xl border shadow font-bold"
            onClick={() => createCoupon(formData)}
          >
            쿠폰 발급하기
          </button>
        </div>
      </main>
    </>
  );
};

export default CreateCoupon;
