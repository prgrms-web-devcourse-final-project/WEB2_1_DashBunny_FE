"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ShopType } from "@/types/types";
import { fetchShop } from "@/lib/api";
import ShopModal from "@/components/shop/ShopModal";

const Shop = () => {
  const ButtonProp = "border-2 p-1 w-24 shadow mx-1 rounded-xl transition"; //버튼 css
  const FontStyle =
    "text-gray-500 font-semibold w-1/6 flex items-center justify-center text-sm 2xl:text-base";

  const [shop, setShop] = useState<ShopType[]>([]);
  const [Loading, setLoading] = useState(true);
  const [Modal, setModal] = useState(false);
  const [seletedShopID, setSeletedShopID] = useState<string | null>(null);
  const [shopState, setShopState] = useState("ENTIRE");
  const [isClient, setIsClient] = useState(false); // 클라이언트 렌더링 상태를 관리

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 데이터 불러오기
  }, []);

  useEffect(() => {
    if (isClient) {
      setLoading(true);
      fetchShop(shopState, 1, 20)
        .then((data) => {
          setShop(data.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [shopState, isClient]);

  if (!isClient || Loading) {
    return <div>Loading...</div>;
  }

  const ModalHandler = (ShopID: string) => {
    setSeletedShopID(ShopID); //모달에게 줄 단독 Shop
    setModal((prev) => !prev); // 모달이 열리도록
  };

  return (
    <>
      <div className="w-full flex ">
        <button
          className={`${ButtonProp} ${
            shopState === "OPEN" ? "border-BunnyOrange border-4" : ""
          }`}
          onClick={() => setShopState("OPEN")}
        >
          영업중
        </button>
        <button
          className={`${ButtonProp} ${
            shopState === "CLOSE" ? "border-BunnyOrange border-4" : ""
          }`}
          onClick={() => setShopState("CLOSE")}
        >
          {" "}
          영업종료
        </button>
        <button
          className={`${ButtonProp} ${
            shopState === "PENDING" ? "border-BunnyOrange border-4" : ""
          }`}
          onClick={() => setShopState("PENDING")}
        >
          {" "}
          등록신청
        </button>
        <button
          className={`${ButtonProp} ${
            shopState === "CLOSURE_PENDING" ? "border-BunnyOrange border-4" : ""
          }`}
          onClick={() => setShopState("CLOSURE_PENDING")}
        >
          {" "}
          폐업신청
        </button>
        <div className="ml-auto flex border p-2 w-1/2 items-center border-gray-300 rounded-xl shadow">
          <Image
            src="/Icon/search.svg"
            alt="search icon"
            width={25}
            height={25}
          />
          <input
            placeholder="위치, 가게 이름으로 검색하세요."
            className="outline-none mx-2 w-1/2"
          />
        </div>
      </div>

      <section className="flex flex-col my-10 h-full static">
        {Modal && (
          <ShopModal setModal={setModal} selectedShopID={seletedShopID} />
        )}
        <main>
          <div className="w-full bg-gray-100 h-12 border border-b-4 rounded-t-2xl flex items-center p-2">
            <p className={`${FontStyle} w-16`}>ID</p>
            <p className={FontStyle}>가게 정보</p>
            <p className={FontStyle}> 영업 정보</p>
            <p className={FontStyle}> 가게 소개</p>
            <p className={FontStyle}> 위치</p>
            <p className={FontStyle}> 등록 상태</p>
            <p className={FontStyle}> 등록/폐업 날짜</p>
          </div>
          <div className="w-full border min-h-[65vh]">
            {shop ? (
              shop.map((shops, i) => (
                <div
                  key={i}
                  className="flex border-b-2 p-2 transition hover:bg-gray-200 "
                  onClick={() => ModalHandler(shops.storeId)}
                >
                  <p className={`${FontStyle} w-16`}>{i + 1}</p>
                  <div className="flex w-1/6 items-center justify-center">
                    <Image
                      src={shops.storeLogo || "/Icon/NoIMG.svg"}
                      alt="storeLogo"
                      width={60}
                      height={60}
                      className="rounded-full mx-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div>
                      <p className="font-bold text-sm 2xl:text-base">
                        {shops.storeName}
                      </p>
                      <p className="text-gray-400 font-semibold text-sm 2xl:text-base">
                        {shops.contactNumber || "입력된 번호가 없습니다."}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/6 flex items-center justify-center">
                    {shops.storeStatus === "OPEN" ? (
                      <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-red-600"></div>
                    )}
                  </div>
                  <p className={FontStyle}>
                    {shops.description || "등록된 소개가 없습니다."}
                  </p>
                  <p className={FontStyle}>{shops.address}</p>
                  <p className={FontStyle}>{shops.storeStatus}</p>
                  <p className={FontStyle}>{shops.approvedDate}</p>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 text-gray-500">
                등록된 가게가 없습니다.
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
};

export default Shop;
