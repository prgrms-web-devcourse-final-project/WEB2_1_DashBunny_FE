"use client";

import CategoryChart from "@/components/categoryChart";
import Image from "next/image";
import CircleGraph from "@/components/CircleGraph";
import { fetchShop, fetchCoupon } from "@/lib/api";
import { useEffect, useState } from "react";
import { ShopType, CouponType } from "@/types/types";
import UserChart from "@/components/userChart";

export default function Home() {
  const Line = "bg-gray-300 h-0.5 w-full my-5"; //라인
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

  const FilterCoupon = Coupon?.filter(
    (coupon) => coupon.couponStatus === "ACTIVE"
  );

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
      <div className="flex flex-row w-full h-1/2 bg-gradient-to-r from-orange-100 via-BunnyOrange to-orange-200 p-5 rounded-2xl">
        {/* 카테고리 차트 */}
        <div className="flex items-center flex-col p-10  shadow-xl w-3/4 bg-gradient-to-t from-white to-orange-100 ">
          <p className="font-bold text-md mb-10  text-BunnyOrange">
            카테고리 별 등록 가게 수
          </p>
          <CategoryChart />
        </div>
        {/* 원형 그래프 */}
        <div className="flex items-center justify-center p-10  flex-col shadow-xl  w-1/4 ml-5 bg-white bg-gradient-to-t from-white to-orange-50  ">
          <p className="font-bold text-md  text-BunnyOrange mb-5">
            DashBunny 이용자
          </p>
          <CircleGraph />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 border mt-10 flex flex-col bg-white rounded-lg shadow-lg">
          <p className="p-4 text-lg font-bold bg-gradient-to-r from-orange-50 to-white text-BunnyOrange rounded-t-lg shadow-md border-b">
            새로운 가게 신청
          </p>
          {pendingShop === undefined ? (
            <div className="p-4 text-center text-gray-500">로딩중입니다.</div>
          ) : (
            <div className="p-4 grid grid-cols-1 gap-4">
              {pendingShop.map((shop) => (
                <div
                  className="flex items-center bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                  key={shop.storeId}
                >
                  <p className="text-center font-bold text-red-500 bg-red-100 px-2 py-1 rounded-full mr-4">
                    New!
                  </p>
                  <div className="flex-1">
                    <p className="font-bold text-lg">{shop.storeName}</p>
                    <p className="text-gray-600">{shop.address}</p>
                  </div>
                  <p className="text-green-600 font-bold text-sm">
                    신청 대기 중
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-1/4 mt-10 flex flex-col mx-5 bg-white rounded-lg shadow-lg">
          <p className="p-4 text-lg font-bold bg-gradient-to-r from-orange-50 to-white text-BunnyOrange rounded-t-lg shadow-md border-b">
            현재 활성 중인 쿠폰
          </p>
          {Coupon === undefined ? (
            <div className="p-4 text-center text-gray-500">로딩중입니다.</div>
          ) : (
            <div className="p-4 grid grid-cols-1 gap-4">
              {FilterCoupon?.map((coupon) => (
                <div
                  className="flex items-center bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                  key={coupon.couponId}
                >
                  <p className="font-bold text-gray-800">{coupon.couponId}</p>
                  <p className="font-bold text-BunnyOrange flex-1 text-center">
                    {coupon.couponName}
                  </p>
                  <div className="text-center bg-green-500 font-bold w-3 h-3 rounded-full"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-1/2  mt-10 flex flex-col bg-white border-BunnyOrange p-5 shadow-xl rounded-xl h-[30vh]">
          <p className="font-bold text-md  text-BunnyOrange mb-5 text-center w-full">
            월 별 가입자 추이
          </p>
          <UserChart />
        </div>
      </div>
      <div className={`${Line}`}></div>
    </div>
  );
}
