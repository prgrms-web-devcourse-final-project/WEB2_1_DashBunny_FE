import Image from "next/image"
import { OrderHistory } from "../model/order"
import GoToDetailPageArrowIcon from "@/components/icons/iconComponents/GoToDetailPageArrowIcon"

export default function OrderCard({
  orderDate,
  orderStatus,
  storeName,
  paymentPrice,
  storeImage,
}: OrderHistory) {
  return (
    <article className="p-4 pt-2">
      <div className="flex justify-start gap-5 text-sm mb-2">
        <time className="text-black-500 text-sm">{orderDate}</time>
        <span className="text-orange-500">{orderStatus}</span>
      </div>
      <div className="flex gap-4">
        <Image
          width={64}
          height={64}
          src={storeImage}
          alt={storeName}
          className="w-16 h-16 rounded-2xl object-cover"
        />
        <div className="w-full justify-between flex items-center">
          <div>
            <h3 className="font-semibold text-black-700 text-h2">{storeName}</h3>
            <p className="text-black-500 mt-1 text-sm">{paymentPrice.toLocaleString()}원</p>
          </div>
          <GoToDetailPageArrowIcon />
        </div>
      </div>
    </article>
  )
}
