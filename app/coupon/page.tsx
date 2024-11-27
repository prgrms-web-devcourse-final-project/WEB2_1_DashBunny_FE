"use client";

import Link from "next/link";
import Image from "next/image";
import { fetchCoupon } from "@/lib/api";
import { CouponType } from "@/types/types";
import { useEffect, useState } from "react";

const Coupon = () => {
  const [coupons, setCoupons] = useState<CouponType[]>();
  const [Loading, setLoading] = useState(true);
  const [couponID, setCouponID] = useState<null | number>(null);

  useEffect(() => {
    fetchCoupon().then((data) => {
      setCoupons(data);
      setLoading(false);
    });
  }, []);

  const expandCoupon = (couponId: number) => {
    setCouponID((prev) => (prev === couponId ? null : couponId));
    console.log(couponID);
  };

  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인
  const NavText = "w-1/4 font-semibold text-md text-center ";

  return (
    <>
      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl ">전체 쿠폰</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange">
            {" "}
            {coupons?.length}
          </p>
          <p className="text-md text-gray-500 font-semibold">
            쿠폰 목록을 누르면 쿠폰의 상세 정보를 볼 수 있습니다.
          </p>
          <Link href="/coupon/create" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-color transform duration-300 ease-in-out">
              쿠폰 생성하기
            </button>
          </Link>
        </div>
        <div className="border rounded-2xl min-h-[80vh] z-10">
          <div className="w-full h-10 border-gray-300 rounded-t-2xl border-b-2 flex items-center justify-center p-5 bg-gray-100">
            <p className="font-semibold text-md text-center w-20">CouponID</p>
            <p className={NavText}>CouponName</p>
            <p className={NavText}>CouponDescription</p>
            <p className={NavText}>CouponType</p>
            <p className={NavText}>CouponStatus</p>
          </div>
          <main className="w-full">
            {Loading ? (
              <div>로딩중입니다.</div>
            ) : (
              coupons &&
              coupons.map((value, i) => (
                <div key={i}>
                  <div
                    className="flex w-full items-center justify-center p-5 border-b"
                    onClick={() => expandCoupon(value.couponId)}
                  >
                    <p className="font-semibold text-md text-center w-20">
                      {value.couponId}
                    </p>
                    <p className={NavText}>{value.couponName}</p>
                    <p className={NavText}>{value.couponDescription}</p>
                    <p className={NavText}>{value.couponType}</p>
                    <p className={NavText}>{value.couponStatus}</p>
                  </div>
                  {value.couponId === couponID && (
                    <div className="w-full  p-5">
                      <div className="flex items-center w-full justify-center border-4 border-b-0 bg-gray-200">
                        <p className="text-2xl text-BunnyOrange font-bold">
                          {value.couponName}{" "}
                        </p>
                        <p className="text-xl font-bold mx-2">쿠폰 상세정보</p>
                      </div>
                      <div className="border-4 p-5 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center gap-10 2xl:gap-40">
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              할인금액
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.discountPrice}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              최소 주문 금액
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.minOrderPrice}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              최대 주문 금액
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.maxIssuance}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl ">
                              발급한도
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.maxIssuance}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              쿠폰 만료일
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.expiredDate}
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="font-bold text-sm 2xl:text-xl">
                              쿠폰 다운로드 시작일
                            </p>
                            <p className="text-sm 2xl:text-xl">
                              {value.downloadStartDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Coupon;
