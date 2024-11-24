import FcfsCoupon from "./FcfsCoupon"

export default function BottomBannerItem() {
  return (
    <div className=" border-t border-x border-gray-200 fixed bottom-[60px] w-[400px] h-36">
      <FcfsCoupon status="waiting" />
    </div>
  )
}
