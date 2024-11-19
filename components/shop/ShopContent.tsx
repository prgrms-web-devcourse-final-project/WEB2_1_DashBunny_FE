const ShopContent = () => {
  return (
    <section className="flex flex-col my-10 h-full">
      <main>
        <div className="w-full bg-gray-100 h-12 border border-b-4 rounded-t-2xl flex items-center justify-center p-2 gap-[7vw]">
          {/* <p className="text-gray-500">가게 정보</p>
            <p className="text-gray-500">영업 정보</p>
            <p className="text-gray-500">가게 소개</p>
            <p className="text-gray-500">위치</p>
            <p className="text-gray-500">등록 상태</p>
            <p className="text-gray-500">등록/폐업 날짜</p> */}
        </div>
        <div className="w-full border h-[65vh]">
          {/* 데이터가 들어와서 렌더링 되는곳  */}
        </div>
      </main>
    </section>
  );
};

export default ShopContent;
