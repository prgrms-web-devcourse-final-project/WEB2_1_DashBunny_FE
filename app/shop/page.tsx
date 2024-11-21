import Image from "next/image";

const Shop = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인
  const ButtonProp = "border-2 p-1 w-24 shadow mx-1 rounded-xl"; //버튼 css
  const FontStyle = "text-gray-500 font-semibold w-1/6 text-center";

  return (
    <>
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

      <section className="flex flex-col my-10 h-full">
        <main>
          <div className="w-full bg-gray-100 h-12 border border-b-4 rounded-t-2xl flex items-center p-2">
            <p className={FontStyle}>가게 정보</p>
            <p className={FontStyle}> 영업 정보</p>
            <p className={FontStyle}> 가게 소개</p>
            <p className={FontStyle}> 위치</p>
            <p className={FontStyle}> 등록 상태</p>
            <p className={FontStyle}> 등록/폐업 날짜</p>
          </div>
          <div className="w-full border h-[65vh]">
            {/* 데이터가 들어와서 렌더링 되는곳  */}
          </div>
        </main>
      </section>
    </>
  );
};

export default Shop;
