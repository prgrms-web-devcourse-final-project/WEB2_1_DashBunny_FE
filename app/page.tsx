"use client";

import CategoryChart from "@/components/categoryChart";
import Image from "next/image";
import CircleGraph from "@/components/CircleGraph";
import { fetchShop, fetchCoupon } from "@/lib/api";
import { useEffect, useState } from "react";
import { ShopType, CouponType } from "@/types/types";
import UserChart from "@/components/userChart";

export default function Home() {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인
  const [pendingShop, setPendingShop] = useState<ShopType[] | undefined>(
    undefined
  );
  const [Coupon, setCoupon] = useState<CouponType[] | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    fetchShop("PENDING", 1, 10).then((data) => {
      setPendingShop(data.content);
    });
    fetchCoupon().then((data) => {
      setCoupon(data);
    });
  }, []);

  useEffect(() => {
    console.log(Coupon);
  }, [Coupon]);

  return (
    <div className="flex flex-col w-full p-11">
      <section>
        <header>
          <div className="flex items-center">
            <Image
              src="/Icon/Dashboard.svg"
              alt="shop icon"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="text-3xl font-bold mx-2">대시보드</p>
          </div>
          <p className="mt-2">
            관리자가 시스템을 효율적으로 관리하고 모니터링할 수 있는
            인터페이스입니다.
          </p>
        </header>
        <div className={Line}></div>
      </section>
      <div className="flex flex-row w-full h-1/2 bg-gradient-to-r from-orange-200 via-BunnyOrange to-orange-200 p-5 rounded-2xl shadow-2xl">
        {/* 카테고리 차트 */}
        <div className="flex items-center flex-col p-10 rounded-2xl shadow-xl w-3/4 bg-gradient-to-t from-white to-orange-100 border-4 border-BunnyOrange">
          <p className="font-bold text-md mb-10  text-BunnyOrange">
            카테고리 별 등록 가게 수
          </p>
          <CategoryChart />
        </div>
        {/* 원형 그래프 */}
        <div className="flex items-center justify-center p-10  flex-col shadow-xl rounded-2xl w-1/4 ml-5 bg-white bg-gradient-to-t from-white to-orange-50 border-4 border-BunnyOrange">
          <p className="font-bold text-md  text-BunnyOrange mb-5">
            DashBunny 이용자
          </p>
          <CircleGraph />
        </div>
      </div>
      <div className="flex flex-row w-full h-1/2 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 p-5 rounded-2xl shadow-2xl mt-5">
        <div className="w-1/3 border mt-10 flex flex-col rounded-xl bg-orange-100 border-BunnyOrange shadow-md">
          <p className="border-orange-200 p-2 text-md font-bold bg-orange-200 shadow-md rounded-t-xl">
            새로운 가게 신청
          </p>
          <p className="text-center font-bold text-red-600 border-b border-gray-400">
            New!
          </p>
          {pendingShop === undefined ? (
            <div>로딩중입니다.</div>
          ) : (
            pendingShop.map((shop) => (
              <div
                className="flex border-b  border-gray-400 p-2"
                key={shop.storeId}
              >
                <p className="font-bold w-1/3 text-center">{shop.storeName}</p>
                <p className="w-1/3 text-center">{shop.address}</p>
                <p className="w-1/3 text-center text-green-500 font-bold">
                  신청 대기 중
                </p>
              </div>
            ))
          )}
        </div>
        <div className="w-1/4 border mt-10 flex flex-col rounded-xl mx-5 bg-white border-BunnyOrange">
          <p className="border-orange-200 p-2 text-md font-bold bg-orange-200 shadow-md rounded-t-xl">
            활성 중인 쿠폰
          </p>
          {Coupon === undefined ? (
            <div>로딩중입니다.</div>
          ) : (
            Coupon.map((coupon) => (
              <div className="flex flex-row items-center justify-center border-b p-5 gap-10 border-gray-400">
                <p className="font-bold">{coupon.couponId}</p>
                <p className="font-bold text-BunnyOrange">
                  {coupon.couponName}
                </p>
                <div className="text-center bg-green-500 font-bold w-3 h-3 rounded-full"></div>
              </div>
            ))
          )}
        </div>
        <div className="w-1/2 border mt-10 flex flex-col rounded-xl bg-white border-BunnyOrange p-5">
          <p className="font-bold text-md  text-BunnyOrange mb-5">
            월 별 가입자 추이
          </p>
          <UserChart />
        </div>
      </div>
    </div>
  );
}
