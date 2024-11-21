import Link from "next/link";

const Coupon = () => {
  const CouponTpyeButton = "border p-3 w-96";

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <p className="text-xl text-BunnyOrange font-bold">쿠폰 목록</p>
          <Link href="/coupon/create">
            <button className="font-bold bg-BunnyOrange border rounded-xl shadow-lg w-40 h-12">
              새로운 쿠폰 생성하기
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Coupon;
