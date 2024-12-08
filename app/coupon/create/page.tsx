"use client";

import { useState } from "react";
import { createCoupon } from "@/lib/api";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CreateCouponRequest } from "@/types/types";
import SuccessMessageModal from "@/components/successMessageModal";

const CreateCoupon = () => {
  const [formData, setFormData] = useState({
    couponName: "",
    couponDescription: "",
    couponType: "Regula",
    discountPrice: 0,
    discountType: "FIXED",
    minOrderPrice: 0,
    expiredDate: "",
    maximumDiscount: null,
    downloadStartDate: null,
    maxIssuance: null,
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const router = useRouter();

  const CouponTypeButton =
    "border-4 p-4 w-1/3 rounded-xl hover:bg-gray-400 focus:ring-2 focus:ring-BunnyOrange focus:bg-BunnyOrange transition font-bold";
  const FontStyle = "mr-auto font-semibold mb-2 text-lg text-gray-700";

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

  const handleCreateCoupon = async (formData: CreateCouponRequest) => {
    try {
      const response = await createCoupon(formData);
      setSuccessMessage(true);
      setTimeout(() => {
        router.push("/coupon");
      }, 2000);
    } catch (error) {
      console.error("쿠폰 발급 실패:", error);
    }
  };

  return (
    <>
      {successMessage && ( //쿠폰 생성 완료 후 알람 창 */}
        <SuccessMessageModal text={"쿠폰이 정상적으로 생성 되었습니다!"} />
      )}
      <p className="text-BunnyOrange font-semibold text-2xl mb-5">
        쿠폰 생성하기
      </p>
      <main className="flex flex-col items-center h-auto overflow-y-auto">
        <section className="flex flex-col w-2/3 items-center mb-10">
          <p className={FontStyle}>쿠폰 이름</p>
          <input
            name="couponName"
            className="border w-full h-12 rounded-xl p-3 outline-none mb-5"
            placeholder="쿠폰 이름을 입력하세요"
            onChange={handleInputChange}
          />
        </section>
        <section className="flex flex-col w-2/3 items-center mb-10">
          <p className={FontStyle}>쿠폰 설명</p>
          <input
            name="couponDescription"
            className="border w-full h-12 rounded-xl p-3 outline-none"
            placeholder="쿠폰 설명을 입력하세요"
            onChange={handleInputChange}
          />
        </section>
        {/* 쿠폰 유형 선택 */}
        <section className="flex flex-col w-2/3 items-center my-10">
          <p className={FontStyle}>쿠폰 유형 선택</p>
          <div className="flex w-full gap-4 items-center justify-center">
            <button
              name="couponType"
              className={`${CouponTypeButton} ${
                formData.couponType === "Regula" ? "bg-BunnyOrange" : ""
              }`}
              onClick={() => handleButtonClick("couponType", "Regula")}
            >
              일반 쿠폰
            </button>
            <button
              name="couponType"
              className={`${CouponTypeButton} ${
                formData.couponType === "FirstCome" ? "bg-BunnyOrange" : ""
              }`}
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
            <div className="w-full flex justify-between border h-12 rounded-xl p-3 mb-5">
              <input
                name="discountPrice"
                className="w-11/12 outline-none"
                placeholder="할인 금액을 입력하세요"
                onChange={handleInputChange}
              />
              <select
                name="discountType"
                className="outline-none text-center font-bold border-l-2 w-20 text-gray-500"
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
          <motion.section
            className="flex w-2/3 my-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-full">
              <p className={FontStyle}>최대 할인 금액</p>
              <div className="flex items-center border h-12 rounded-xl p-2 justify-between">
                <input
                  name="maximumDiscount"
                  className="h-full outline-none w-11/12"
                  onChange={handleInputChange}
                  placeholder="최대 할인 금액"
                />
                <p className="border-l-2 w-20 h-7 text-center flex items-center justify-center font-bold text-gray-500">
                  원
                </p>
              </div>
            </div>
          </motion.section>
        )}

        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>최소 주문 금액</p>
            <div className="flex items-center border h-12 rounded-xl p-2 justify-between">
              <input
                name="minOrderPrice"
                className="h-full outline-none w-11/12"
                onChange={handleInputChange}
                placeholder="최소 주문 금액"
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
              className="border w-full h-12 rounded-xl p-3 outline-BunnyOrange"
              onChange={handleInputChange}
            />
          </div>
        </section>

        {formData.couponType === "FirstCome" && (
          <>
            <motion.section
              className="flex w-2/3 my-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-full">
                <p className={FontStyle}>쿠폰 다운로드 시작일</p>
                <input
                  name="downloadStartDate"
                  type="datetime-local"
                  className="border w-full h-12 rounded-xl p-3 outline-BunnyOrange"
                  onChange={handleInputChange}
                />
              </div>
            </motion.section>

            <motion.section
              className="flex w-2/3 my-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-full">
                <p className={FontStyle}>발급 한도</p>
                <div className="w-full flex border h-12 rounded-xl justify-between items-center p-2">
                  <input
                    name="maxIssuance"
                    className="outline-none w-11/12"
                    onChange={handleInputChange}
                    placeholder="발급 한도를 입력하세요"
                  />
                  <p className="items-center justify-center w-12 font-bold h-12 flex text-gray-500">
                    장
                  </p>
                </div>
              </div>
            </motion.section>
          </>
        )}

        <div className="flex justify-center items-center my-10">
          <button
            className="bg-BunnyOrange p-3 w-96 rounded-xl border shadow font-bold text-white"
            onClick={() => handleCreateCoupon(formData)}
          >
            쿠폰 발급하기
          </button>
        </div>
      </main>
    </>
  );
};

export default CreateCoupon;
