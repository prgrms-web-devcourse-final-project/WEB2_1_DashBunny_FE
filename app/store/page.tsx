"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ShopType } from "@/types/types";
import { fetchShop } from "@/lib/api";
import ShopModal from "@/components/shop/ShopModal";
import { useInfiniteQuery } from "@tanstack/react-query";
import next from "next";

const Shop = () => {
  const ButtonProp = "border-2 p-1 w-24 shadow mx-1 rounded-xl"; //버튼 css
  const FontStyle =
    "text-gray-500 font-semibold w-1/6 flex items-center justify-center text-sm 2xl:text-base";

  const [Modal, setModal] = useState(false);
  const [seletedShopID, setSeletedShopID] = useState<string | null>(null);
  const [filterShop, setFilterShop] = useState("ENTIRE");

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery({
      queryKey: ["shopData"],
      queryFn: ({ pageParam = 1 }) => fetchShop(filterShop, pageParam, 10),
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.pageable.pageNumber + 1; // 0 기반
        const totalPages = lastPage.totalPages; // 총 페이지 수
        const nextPage = currentPage + 1;

        console.log("다음 페이지", currentPage, totalPages, nextPage);
        return nextPage < totalPages ? nextPage : undefined;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    refetch();
  }, [filterShop, refetch]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isFetching) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    };

    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 1.0, // 100% 보일 때 트리거
    };

    if (lastItemRef.current) {
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (observer.current && lastItemRef.current) {
        observer.current.unobserve(lastItemRef.current);
      }
    };
  }, [isFetching, hasNextPage, fetchNextPage]);

  const ModalHandler = (ShopID: string) => {
    setSeletedShopID(ShopID); //모달에게 줄 단독 Shop
    setModal((prev) => !prev); // 모달이 열리도록
  };

  return (
    <>
      <div className="w-full flex ">
        <button
          className={`${ButtonProp} transition ${
            filterShop === "ENTIRE" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("ENTIRE")}
        >
          전체
        </button>
        <button
          className={`${ButtonProp} transition ${
            filterShop === "OPEN" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("OPEN")}
        >
          영업중
        </button>
        <button
          className={`${ButtonProp} transition ${
            filterShop === "CLOSE" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("CLOSE")}
        >
          {" "}
          영업종료
        </button>
        <button
          className={`${ButtonProp} transition ${
            filterShop === "PENDING" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("PENDING")}
        >
          {" "}
          등록신청
        </button>
        <button
          className={`${ButtonProp} transition ${
            filterShop === "CLOSURE_PENDING" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("CLOSURE_PENDING")}
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
            {data?.pages.map((page, index) => (
              <div key={index}>
                {page.content.map((shops: ShopType, i: number) => (
                  <div
                    key={shops.storeId}
                    className="flex border-b-2 p-2 trasition hover:bg-gray-200 "
                    onClick={() => ModalHandler(shops.storeId)}
                  >
                    <p className={`${FontStyle} w-16`}>{i + 1}</p>
                    <div className="flex w-1/6 items-center justify-center">
                      <Image
                        src={"/Icon/NoIMG.svg"}
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
                          {shops.userPhone || "입력된 번호가 없습니다."}
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
                ))}
              </div>
            ))}
            <div ref={lastItemRef}></div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Shop;
