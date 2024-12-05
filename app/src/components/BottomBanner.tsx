import LimitedCoupon from "./LimitedCoupon"
//@=>자동캐러셀로 만들어보자
export default function BottomBanner() {
  return (
    <div className=" border-t border-x border-gray-200 fixed bottom-[60px] w-[400px] h-36 p-3 bg-white ">
      <LimitedCoupon />
    </div>
  )
}
