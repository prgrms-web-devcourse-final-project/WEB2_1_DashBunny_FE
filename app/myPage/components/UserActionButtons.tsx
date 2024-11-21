import MiniGoToDetailPageArrowIcon from "@/components/icons/iconComponents/MiniGoToDetailPageArrowIcon"
import OrderHistoryNavEmptyIcon from "@/components/icons/iconComponents/OrderHistoryNavEmptyIcon"
import ReviewIcon from "@/components/icons/iconComponents/ReviewIcon"
import SaveHeartNavEmptyIcon from "@/components/icons/iconComponents/SaveHeartNavEmptyIcon"

interface ActionButton {
  label: string
  count: number
}

export default function UserActionButtons() {
  const couponButtons: ActionButton[] = [
    { label: "쿠폰함", count: 0 },
    { label: "선물함", count: 0 },
  ]

  return (
    <>
      <div className=" mt-5 mx-5 rounded-t-xl p-1.5 ">
        <div className="flex justify-evenly items-center pt-4  rounded-lg mb-4 ">
          <button className="flex flex-col items-center gap-1">
            <SaveHeartNavEmptyIcon />
            <span className="text-xs text-gray-500">찜 목록</span>
          </button>
          <div className="h-10 w-[1px] bg-black-400"></div>
          <button className="flex flex-col items-center gap-1">
            <OrderHistoryNavEmptyIcon />
            <span className="text-xs text-gray-500">주문내역</span>
          </button>
          <div className="h-10 w-[1px] bg-black-400"></div>
          <button className="flex flex-col items-center gap-1">
            <ReviewIcon />
            <span className="text-xs text-gray-500">리뷰관리</span>
          </button>
        </div>
      </div>
      {/* 쿠폰/선물함 버튼 */}
      <div className="border-x border-b border-gray-100 rounded-b-lg bg-black-200  mb-5 mx-5">
        <div className="grid grid-cols-2 gap-6 p-4 ">
          {couponButtons.map((button, index) => (
            <button key={button.label} className="flex items-center gap-1 ">
              <div className=" w-full flex items-center justify-between">
                <span className="text-gray-700 text-sm">{button.label}</span>
                <span className="ml-2 text-gray-700 text-sm">{button.count}장</span>
              </div>
              <MiniGoToDetailPageArrowIcon />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
