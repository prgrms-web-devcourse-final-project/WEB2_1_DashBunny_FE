"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactKakaoMap from "../nextJsKakaoMap";
import { ShopType } from "@/types/types";
import {
  fetchShopById,
  approveShop,
  rejectShop,
  approveClosureShop,
} from "@/lib/api";

const ShopModal = ({
  setModal,
  selectedShopID,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedShopID: string | null;
}) => {
  const [shopByID, setShopByID] = useState<ShopType>();
  const [Loading, setLoading] = useState(true);
  const [rejectModal, setRejectModal] = useState(false);
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    fetchShopById(selectedShopID).then((data) => {
      setShopByID(data);
      setLoading(false);
    });
  }, [selectedShopID]);

  const approveShopButton = (ShopID: string | null) => {
    if (ShopID) {
      approveShop(ShopID);
      setModal(false);
    }
  };

  const rejectShopButton = (ShopID: string | null, reason: string) => {
    if (ShopID) {
      rejectShop(ShopID, reason);
      setModal(false);
    }
  };

  const rejectResaon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const approveClosure = (ShopID: string | null) => {
    if (ShopID) {
      approveClosureShop(ShopID);
      setModal(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <section
        className={`bg-white w-[60vw] h-[90vh] shadow-xl rounded-2xl overflow-y-auto`}
      >
        <div className="flex justify-between w-full p-3 border-b-2 right-0 top-0 bg-gradient-to-r  shadow-md">
          <p className="text-2xl font-bold text-BunnyOrange animate-fadeIn">
            가게 상세 정보
          </p>
          <button
            onClick={() => setModal((prev) => !prev)}
            className="text-2xl font-semibold text-gray-600 hover:text-red-500 transition duration-300"
          >
            ✖
          </button>
        </div>
        {Loading ? (
          <div className="flex items-center justify-center h-full text-xl font-semibold">
            로딩중입니다...
          </div>
        ) : (
          <>
            <div className="relative w-full h-60">
              {shopByID && (
                <Image
                  src={shopByID.storeBannerImage || "/Icon/NoIMG_detail.svg"}
                  alt="가게 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              )}
            </div>
            <div className="flex items-center justify-between h-20 p-5 border-b-2">
              <div className="flex items-center">
                <p className="text-3xl font-bold text-BunnyOrange mr-4">
                  {shopByID?.storeName}
                </p>
                <div>
                  <p className="text-gray-600 font-semibold">
                    {shopByID?.userName}
                  </p>
                  <p className="text-gray-600 font-semibold">
                    {shopByID?.userPhone || "등록된 번호가 없습니다."}
                  </p>
                </div>
              </div>
              <div className="font-bold text-gray-500">
                {shopByID?.storeStatus}
              </div>
            </div>
            <div className="border-b-2 p-5">
              <p className="text-2xl font-bold mb-3">사장님 말씀</p>
              <p className="p-5 text-xl text-gray-500">
                {shopByID?.description || "등록된 소개글이 없습니다."}
              </p>
            </div>
            <div className="border-b-2 p-5">
              <div className="flex items-center mb-4">
                <Image
                  src="/Icon/location.svg"
                  alt="위치 아이콘"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <p className="text-2xl font-bold">위치</p>
              </div>
              <p className="text-gray-500 mb-4">{shopByID?.address}</p>
              <div className="flex items-center justify-center">
                {shopByID && (
                  <ReactKakaoMap
                    latitude={shopByID?.latitude}
                    longitude={shopByID?.longitude}
                  />
                )}
              </div>
            </div>
            {shopByID?.storeStatus === "PENDING" && !rejectModal && (
              <div className="flex items-center justify-around p-5">
                <button
                  className="flex items-center px-8 py-4 font-bold text-white bg-green-500 rounded-xl hover:bg-green-600"
                  onClick={() => approveShopButton(selectedShopID)}
                >
                  가게 등록 승인
                </button>
                <button
                  className="flex items-center px-8 py-4 font-bold text-white bg-red-500 rounded-xl hover:bg-red-600"
                  onClick={() => setRejectModal(true)}
                >
                  가게 등록 거절
                </button>
              </div>
            )}
            {shopByID?.storeStatus === "CLOSURE_PENDING" && (
              <div className="flex justify-center p-5">
                <button
                  className="px-8 py-4 font-bold text-white bg-BunnyOrange rounded-xl hover:bg-orange-500"
                  onClick={() => approveClosure(selectedShopID)}
                >
                  폐업 신청 승인
                </button>
              </div>
            )}
            {rejectModal && (
              <div className="flex flex-col items-center p-5">
                <input
                  className="w-full p-3 mb-3 border rounded-lg shadow-md outline-none focus:ring-2 focus:ring-BunnyOrange"
                  placeholder="거절 사유를 입력하세요."
                  onChange={rejectResaon}
                />
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 font-bold text-white bg-BunnyOrange rounded-md hover:bg-orange-500"
                    onClick={() =>
                      rejectShopButton(selectedShopID as string, reason)
                    }
                  >
                    확인
                  </button>
                  <button
                    className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => setRejectModal(false)}
                  >
                    취소
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ShopModal;
