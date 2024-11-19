import Image from "next/image";

const ShopHeader = () => {
  const ButtonProp = "border-2 p-1 w-24 shadow mx-1 rounded-xl"; //버튼 css
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <section className="w-full">
      <header>
        <div className="flex items-center">
          <Image
            src="/Icon/shop.svg"
            alt="shop icon"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-3xl font-bold mx-2">가게 관리</p>
        </div>
        <p className="mt-2">
          가게 목록을 조회하고,영업 상태,등록 상태를 확인 할 수 있습니다.
        </p>
      </header>
      <div className={Line}></div>
      <div className="w-full flex">
        <button className={ButtonProp}>영업중</button>
        <button className={ButtonProp}> 영업종료</button>
        <button className={ButtonProp}> 등록신청</button>
        <button className={ButtonProp}> 폐업신청</button>
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
    </section>
  );
};

export default ShopHeader;
