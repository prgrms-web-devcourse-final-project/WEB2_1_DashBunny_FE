import Image from "next/image"
import Link from "next/link"
import { type Order } from "../model/order"
import GoToDetailPageArrowIcon from "@/components/icons/iconComponents/GoToDetailPageArrowIcon"
import StarRating from "./StarRating"
import { useState } from "react"

type OrderCardProps = Order & {
  className?: string
}

export default function OrderCard({
  orderDate,
  orderStatus,
  storeName,
  menuName,
  storeId,
  storeLogo,
  totalPrice,
  totalQuantity,
  userPhone,
  className,
}: OrderCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\. /g, "-")
      .replace(".", "")
  }
  const [formData, setFormData] = useState({ rating: 5 })
  const [hover, setHover] = useState(0)

  const ratingHandler = (rating: number) => {
    const newFormData = { rating }
    setFormData(newFormData)
  }

  return (
    <Link href={`/stores/${storeId}`}>
      <article className={"p-4 pt-2 hover:bg-gray-50 "}>
        <header className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-5 text-sm">
            <time dateTime={orderDate} className="text-black-500">
              {formatDate(orderDate)}
            </time>
            <span className="text-orange-500">{orderStatus}</span>
            <StarRating
              hover={hover}
              setHover={setHover}
              rating={formData.rating}
              setFormData={ratingHandler}
            />
          </div>
        </header>

        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <Image
              src={"https://placehold.co/80x80"}
              alt={`${storeName} 로고`}
              fill
              sizes="80px"
              className="rounded-2xl object-cover"
              priority={false}
            />
          </div>

          <div className="flex-1 pl-3 flex items-center ">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-black-700 text-[19px] line-clamp-1">{storeName}</h3>
              <p className="text-black-600 mt-1 text-base line-clamp-1">
                {menuName} 외 {totalQuantity - 1}개
              </p>
              <p className="text-black-600 mt-1 text-lg font-medium">{totalPrice}원</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
