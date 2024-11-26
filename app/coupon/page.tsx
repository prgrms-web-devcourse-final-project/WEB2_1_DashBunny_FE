import Link from "next/link";
import Image from "next/image";

const Coupon = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <>
      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl ">전체 쿠폰</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange"> {11}</p>
          <Link href="/coupon/create" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-color transform duration-300 ease-in-out">
              쿠폰 생성하기
            </button>
          </Link>
        </div>
        <div className="border rounded-2xl min-h-[80vh] z-10">
          <div className="bg-slate-100 w-full h-8 border-gray-500 rounded-t-2xl">
            <p>ID</p>
            <p>쿠폰 이름</p>
            <p>쿠폰 유형</p>
            <p>할인 가격</p>
            <p>최소 주문 금액</p>
          </div>
          <main className="w-full">{/* 데이터가 들어올 곳 */}</main>
        </div>
      </section>
    </>
  );
};

export default Coupon;
