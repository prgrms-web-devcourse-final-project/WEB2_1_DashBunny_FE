"use client"

import Divider from "@/components/common/Divider"
import MenuList from "./MenuList"
import { Select } from "@/components/common/Selector"
import { couponOptions, paymentOptions } from "@/mock/data/CartData"
import PriceSummary from "./PriceSummary"
import PaymentButton from "./PaymentButton"
import { useGetCartItem } from "../hook"
import { usePostPayment } from "../hook/usePostPayment"
import { useState } from "react"
import EmptyCart from "./EmptyCart"
interface OrderRequest {
  storeRequirement: string
  deliveryRequirement: string
}
export default function OrderSheet() {
  const { data, isError, isLoading } = useGetCartItem()

  const { postPayment } = usePostPayment()
  const [orderRequest, setOrderRequest] = useState<OrderRequest>({
    storeRequirement: "",
    deliveryRequirement: "",
  })
  if (isLoading) return <div>loading</div>
  if (!data || isError) return <EmptyCart />

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderRequest((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const paymentHandler = () => {
    postPayment({
      ...orderRequest,
    })
  }
  return (
    <>
      <MenuList storeName={data.storeName} cartItems={data.cartItems} />
      <Divider />
      {/* Store Request */}
      <div className="p-5">
        <p className="text-black-700 text-h3 font-semibold">가게 요청사항</p>
        <input
          type="text"
          name="storeRequirement"
          value={orderRequest.storeRequirement}
          onChange={handleRequestChange}
          placeholder="예) 견과류 빼주세요"
          className="w-full mt-2 p-2 bg-gray-50 rounded-md"
        />
      </div>
      <Divider />
      <div className="p-5">
        <p className="text-black-700 text-h3 font-semibold">기사님 요청사항</p>
        <input
          type="text"
          name="deliveryRequirement"
          value={orderRequest.deliveryRequirement}
          onChange={handleRequestChange}
          placeholder="예) 문 앞에 놔주세요"
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
      <PriceSummary
        deliveryFee={data?.deliveryFee ?? 0}
        totalAmount={data?.totalAmount ?? 0}
        totalItemsPrice={data.totalItemsPrice}
      />
      {/* Footer Notice */}
      <div className="p-4 text-xs text-gray-500 space-y-1">
        <p>• 개인정보 제3자 제공 내용 및 결제에 동의합니다.</p>
      </div>
      <PaymentButton onClick={paymentHandler} text={`${data?.totalAmount}원 결제하기`} />
    </>
  )
}
/**
 * 결제 api 만들고, 성공 시 url채취해서 이동하기.
 *
 */
