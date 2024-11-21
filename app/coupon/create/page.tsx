const CreateCoupon = () => {
  const CouponTpyeButton = "border p-3 w-96 rounded-xl bg-gray-300";
  const Line = "bg-gray-200 h-0.5 w-full mt-auto"; //라인
  const FontStyle = "mr-auto font-semibold mb-1 text-lg";

  return (
    <>
      <p className="text-BunnyOrange font-semibold text-2xl">쿠폰 생성하기</p>
      <main className="flex flex-col items-center h-[900px]">
        <section className="flex flex-col w-2/3 items-center">
          <p className={FontStyle}>쿠폰이름</p>
          <input className="border w-full h-12 rounded-xl p-2 outline-none" />
        </section>
        {/* 쿠폰 유형 선택 */}
        <section className="flex flex-col w-2/3 items-center my-10">
          <p className={FontStyle}>쿠폰 유형 선택</p>
          <div className="flex w-full justify-between">
            <button className={CouponTpyeButton}>일반 쿠폰</button>
            <button className={CouponTpyeButton}>선착순 쿠폰</button>
            <button className={CouponTpyeButton}>이벤트 쿠폰</button>
          </div>
        </section>
        {/* 쿠폰 할인 금액과 최수 주문 금액 */}
        <section className="flex w-2/3 my-10">
          <div className="w-full flex flex-col items-center">
            <p className={FontStyle}>할인 금액</p>
            <div className="w-full flex justify-between border h-12 rounded-xl p-2">
              <input className="w-11/12 outline-none" />
              <select className="outline-none text-center font-bold border-l-2  w-20 text-gray-500">
                <option value="%">%</option>
                <option value="KRW">KRW</option>
              </select>
            </div>
          </div>
        </section>
        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>최소 주문 금액</p>
            <div className="flex items-center border h-12 rounded-xl p-2 justify-between">
              <input className="h-full outline-none w-11/12" />
              <p className="border-l-2 w-20 h-7 text-center flex items-center justify-center font-bold text-gray-500">
                원 이상
              </p>
            </div>
          </div>
        </section>
        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>쿠폰 만료 기한</p>
            <input
              type="date"
              className="border w-full h-12 rounded-xl p-2"
            ></input>
          </div>
        </section>
        <section className="flex w-2/3 my-10">
          <div className="w-full">
            <p className={FontStyle}>발급 한도</p>
            <div className="w-full flex border h-12 rounded-xl justify-between items-center p-2">
              <input className="outline-none w-11/12" />
              <p className="items-center justify-center w-12 font-bold h-12 flex text-gray-500">
                장
              </p>
            </div>
          </div>
        </section>
        <div className={Line}></div>
      </main>
      <div className="flex justify-center items-center mt-10">
        <button className="bg-BunnyOrange p-2 w-96 rounded-xl border shadow font-bold">
          쿠폰 발급하기
        </button>
      </div>
    </>
  );
};

export default CreateCoupon;
