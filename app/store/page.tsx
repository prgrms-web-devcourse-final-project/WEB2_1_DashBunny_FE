"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ShopType } from "@/types/types";
import { fetchShop } from "@/lib/api";
import ShopModal from "@/components/shop/ShopModal";
import { useInfiniteQuery } from "@tanstack/react-query";

const Shop = () => {
  const ButtonProp =
    "border-2 p-2 w-28 shadow mx-1 rounded-lg text-sm font-medium hover:bg-orange-100 transition-all";
  const FontStyle =
    "text-gray-600 font-medium w-1/6 flex items-center justify-center text-sm lg:text-base";

  const [Modal, setModal] = useState(false);
  const [seletedShopID, setSeletedShopID] = useState<string | null>(null);
  const [filterShop, setFilterShop] = useState("ENTIRE");
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [filteredData, setFilteredData] = useState<ShopType[]>([]); // 필터링된 데이터 상태 추가

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery({
      queryKey: ["shopData"],
      queryFn: ({ pageParam = 1 }) => fetchShop(filterShop, pageParam, 10),
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.pageable.pageNumber + 1; // 0 기반
        const totalPages = lastPage.totalPages; // 총 페이지 수
        const nextPage = currentPage + 1;

        return nextPage < totalPages ? nextPage : undefined;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    refetch();
  }, [filterShop, refetch]);

  useEffect(() => {
    // 검색어와 상태를 기반으로 데이터 필터링
    if (searchQuery) {
      const allShops = data?.pages.flatMap((page) => page.content) || [];
      const filtered = allShops.filter(
        (shop: ShopType) =>
          shop.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          shop.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data?.pages.flatMap((page) => page.content) || []);
    }
  }, [searchQuery, data]);

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
      <div className="w-full flex">
        <button
          className={`${ButtonProp} ${
            filterShop === "ENTIRE" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("ENTIRE")}
        >
          전체
        </button>
        <button
          className={`${ButtonProp} ${
            filterShop === "OPEN" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("OPEN")}
        >
          영업중
        </button>
        <button
          className={`${ButtonProp} ${
            filterShop === "CLOSE" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("CLOSE")}
        >
          영업종료
        </button>
        <button
          className={`${ButtonProp} ${
            filterShop === "PENDING" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("PENDING")}
        >
          등록신청
        </button>
        <button
          className={`${ButtonProp} ${
            filterShop === "CLOSURE_PENDING" ? "bg-BunnyOrange font-bold" : ""
          }`}
          onClick={() => setFilterShop("CLOSURE_PENDING")}
        >
          폐업신청
        </button>
        <div className="ml-auto flex border p-2 w-1/2 items-center border-gray-300 rounded-lg shadow">
          <Image
            src="/Icon/search.svg"
            alt="search icon"
            width={25}
            height={25}
          />
          <input
            placeholder="위치, 가게 이름으로 검색하세요."
            className="outline-none mx-2 w-1/2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // 검색어 입력 핸들러
          />
        </div>
      </div>

      <section className="flex flex-col my-10 h-full static">
        {Modal && (
          <ShopModal setModal={setModal} selectedShopID={seletedShopID} />
        )}
        <main>
          <div className="w-full bg-white h-14 border border-gray-300 rounded-t-lg flex items-center px-3 shadow-md">
            <p className={`${FontStyle} w-16`}>ID</p>
            <p className={FontStyle}>가게 정보</p>
            <p className={FontStyle}>영업 정보</p>
            <p className={FontStyle}>가게 소개</p>
            <p className={FontStyle}>위치</p>
            <p className={FontStyle}>등록 상태</p>
            <p className={FontStyle}>등록/폐업 날짜</p>
          </div>
          <div className="w-full border min-h-[65vh]">
            {filteredData.map((shops: ShopType, i: number) => (
              <div
                key={`${shops.storeId}-${i}`}
                className="flex border-b p-3 transition hover:bg-gray-100 rounded-lg"
                onClick={() => ModalHandler(shops.storeId)}
              >
                <p className={`${FontStyle} w-16`}>{i + 1}</p>
                <div className="flex w-1/6 items-center justify-center">
                  <Image
                    src={shops.storeLogo || "/Icon/NoIMG.svg"}
                    alt="storeLogo"
                    width={60}
                    height={60}
                    className="rounded-lg shadow-sm mx-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <p className="font-bold text-sm lg:text-base text-gray-700">
                      {shops.storeName}
                    </p>
                    <p className="text-gray-500 font-medium text-xs lg:text-sm">
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
            <div ref={lastItemRef}></div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Shop;
