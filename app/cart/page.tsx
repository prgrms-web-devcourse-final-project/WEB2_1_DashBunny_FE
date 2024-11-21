import ColorButton from "@/components/common/ColorButton"
import Divider from "@/components/common/Divider"
import Header from "@/components/common/Header"
import MapPinColorIcon from "@/components/icons/iconComponents/MapPinColorIcon"
import React from "react"
import PaymentButton from "./components/PaymentButton"
import Image from "next/image"
import QuantityButton from "@/components/common/QuantityButton"
import { Select } from "@/components/common/Selector"

const OrderSummary = () => {
  const paymentOptions = [
    { value: "card", label: "카드 결제" },
    { value: "bank", label: "계좌 이체" },
    { value: "phone", label: "휴대폰 결제" },
  ]
  const couponOptions = [
    { value: "coupon1", label: "쿠폰 1" },
    { value: "coupon2", label: "쿠폰 2" },
    { value: "coupon3", label: "쿠폰 3" },
  ]

  return (
    <div className="p-4">
      {/* Address Section */}
      <div className="px-4 pb-4 p">
        <div className="flex gap-2">
          <MapPinColorIcon />
          <div>
            <h2 className="font-semibold text-h3 inline-block">기장군 일광읍 해송3로 18</h2>
            <span className="text-sm text-black-600"> (으)로 배달</span>
            <p className="text-[14px] text-black-600">부산광역시 기장군 일광읍 해송3로 18</p>
          </div>
        </div>
      </div>
      <Divider />
      {/* Restaurant Name */}
      <div className="p-5 border-b ">
        <h1 className="font-semibold text-h3 text-black-700">세이고우&왕알타코야끼</h1>
      </div>

      {/* Order Items */}
      <div className="p-5 space-y-4">
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <Image
            width={73}
            height={73}
            src="https://placehold.co/73x73"
            alt="Menu item"
            className="w-[73px] h-[73px] rounded-md object-cover"
          />
          <div className="flex-1">
            <p className="font-md text-black-700">참깨빵위에 양상추</p>
            <p className="text-h3 font-bold text-black-700">19,500원</p>
          </div>
          <QuantityButton />
        </div>
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <Image
            width={73}
            height={73}
            src="https://placehold.co/73x73"
            alt="Menu item"
            className="w-[73px] h-[73px] rounded-md object-cover"
          />
          <div className="flex-1">
            <p className="font-md text-black-700">화덕 마르게리따 산마르자노 플럼토마토</p>
            <p className="text-h3 font-bold text-black-700">19,500원</p>
          </div>
          <QuantityButton />
        </div>
      </div>
      <Divider />
      {/* Store Request */}
      <div className="p-5">
        <p className="text-black-700 text-h3 font-semibold">가게 요청사항</p>
        <input
          type="text"
          placeholder="예) 견과류 빼주세요"
          className="w-full mt-2 p-2 bg-gray-50 rounded-md"
        />
      </div>
      <Divider />
      {/* Payment Method */}
      <div className="p-5">
        <div className="flex flex-col gap-3 justify-start items-start">
          <p className="text-black-700 text-h3 font-semibold">결제수단</p>
          <Select options={paymentOptions} />
        </div>
      </div>
      <Divider />
      {/* Coupon */}
      <div className="p-5 ">
        <div className="flex flex-col gap-3 justify-start   items-start">
          <p className="text-black-700 text-h3 font-semibold">쿠폰</p>
          <Select options={couponOptions} />
        </div>
      </div>
      <Divider />
      {/* Price Summary */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <span>상품금액</span>
          <span>19,500원</span>
        </div>
        <div className="flex justify-between">
          <span>배달요금</span>
          <span className="text-orange-500">2,000원</span>
        </div>
        <div className="flex justify-between">
          <span>추가할인</span>
          <span className="text-orange-500">-3,000원</span>
        </div>
        <div className="flex justify-between font-bold pt-3 border-t">
          <span>총 결제 금액</span>
          <span>18,500원</span>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="p-4 text-xs text-gray-500 space-y-1">
        <p>• 개인정보 제3자 제공 내용 및 결제에 동의합니다.</p>
      </div>
      <PaymentButton text="19500원 결제하기" />
    </div>
  )
}

export default OrderSummary
