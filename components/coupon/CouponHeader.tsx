import Image from "next/image";

const CouponHeader = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <section className="w-full">
      <header>
        <div className="flex items-center">
          <Image
            src="/Icon/coupon.svg"
            alt="notice image"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-3xl font-bold mx-2">쿠폰 관리</p>
        </div>
        <p className="mt-2">쿠폰을 생성하고, 배포할 수 있습니다.</p>
        <div className={Line}></div>
      </header>
    </section>
  );
};

export default CouponHeader;
