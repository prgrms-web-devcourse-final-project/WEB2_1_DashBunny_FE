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
    }
  };

  const rejectShopButoon = (ShopID: string | null, reason: string) => {
    if (ShopID) {
      rejectShop(ShopID, reason);
    }
  };

  const rejectResaon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
  };

  const approveClosure = (ShopID: string | null) => {
    if (ShopID) {
      approveClosureShop(ShopID);
    }
  };

  return (
    <div className="fixed inset-0 min-w-full items-center bg-black -top-0 -left-0 bg-opacity-[30%] flex justify-center">
      <section
        className={`bg-white w-[50vw] h-[90vh] shadow-2xl rounded-2xl overflow-y-auto`}
      >
        <div className="flex justify-between w-full p-3 border-b-2 right-0 top-0">
          <p className="text-2xl font-bold">가게 상세 정보</p>
          <button
            onClick={() => setModal((prev) => !prev)}
            className="text-2xl font-semibold"
          >
            X
          </button>
        </div>
        {Loading ? (
          <div>로딩중입니다.</div>
        ) : (
          <>
            <div className="relative w-full h-60">
              {shopByID && (
                <Image
                  src={shopByID.storeBannerImage || "/Icon/NoIMG_detail.svg"}
                  alt="Image"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="flex items-center h-20 p-2 border-b-2 justify-between">
              <div className="flex items-center justify-center">
                <p className="text-3xl font-bold text-BunnyOrange mx-2">
                  {shopByID?.storeName}
                </p>
                <div>
                  <p className=" text-gray-500 font-semibold">
                    {shopByID?.userName}
                  </p>
                  <p className="text-gray-500 font-semibold">
                    {shopByID?.userPhone || "등록된 번호가 없습니다."}
                  </p>
                </div>
              </div>
              <div className="font-bold p-2">{shopByID?.storeStatus}</div>
            </div>
            <div className="border-b-2 p-5">
              <p className="text-2xl font-bold mx-2">사장님 말씀</p>
              <p className="p-5 font-semibold text-xl text-gray-500">
                {shopByID?.description || "등록된 소개글이 없습니다."}
              </p>
            </div>
            <div className="border-b-2">
              <div className="flex items-center p-5">
                <Image
                  src="/Icon/location.svg"
                  alt="location icon"
                  width={20}
                  height={20}
                  className="mx-1"
                />
                <p className="text-2xl font-bold mx-1 ">위치</p>
                <p className="text-md text-gray-500">{shopByID?.address}</p>
              </div>
              <div className="flex items-center justify-center p-2">
                {shopByID && (
                  <ReactKakaoMap
                    latitude={shopByID?.latitude}
                    longitude={shopByID?.longitude}
                  />
                )}
              </div>
            </div>
            {shopByID?.storeStatus === "PENDING" && !rejectModal && (
              <>
                <div className="flex items-center justify-center p-5 gap-40 ">
                  <button
                    className="flex items-center border p-5 shadow rounded-2xl font-bold w-60 justify-center"
                    onClick={() => approveShopButton(selectedShopID)}
                  >
                    <div className="bg-green-500 w-3 h-3 rounded-full mx-1"></div>
                    가게 등록 승인
                  </button>
                  <button
                    className="flex items-center border p-5 shadow rounded-2xl font-bold w-60 justify-center"
                    onClick={() => setRejectModal((prev) => !prev)} //거절 사유 창을 따로 만들어야함
                  >
                    <div className="bg-red-500 w-3 h-3 rounded-full mx-1"></div>
                    가게 등록 거절
                  </button>
                </div>
              </>
            )}
            {shopByID?.storeStatus === "CLOSURE_PENDING" && (
              <div className="w-full flex items-center justify-center p-5">
                <button
                  className="flex items-center border p-5 shadow rounded-2xl font-bold w-60 justify-center"
                  onClick={() => approveClosure(selectedShopID)} //거절 사유 창을 따로 만들어야함
                >
                  <div className="bg-red-500 w-3 h-3 rounded-full mx-1"></div>
                  폐업 신청 승인
                </button>
              </div>
            )}
            {rejectModal && (
              <div className="flex w-full items-center justify-center">
                <input
                  className="border my-5 w-2/3 p-2 rounded-xl shadow-md mr-5 outline-BunnyOrange"
                  placeholder="거절 사유를 간단하게 입력해주세요."
                  onChange={rejectResaon}
                />
                <button
                  className="border p-2 bg-BunnyOrange font-bold rounded-xl shadow-md w-20 mr-1"
                  onClick={() => rejectShop(selectedShopID as string, reason)}
                >
                  확인
                </button>
                <button
                  className="border p-2 bg-gray-400 font-bold rounded-xl shadow-md w-20"
                  onClick={() => setRejectModal(false)}
                >
                  취소
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ShopModal;
