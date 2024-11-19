import Image from "next/image"
import RatingStarIcon from "../icons/iconComponents/RatingStarIcon"
import kfc from "@/public/image/kfc.png"
import CouponBadge from "./CouponBadge"
import Link from "next/link"

// components/restaurant/RestaurantCard.tsx
interface RestaurantProps {
  id: string
  name: string
  rating: number
  reviewCount: number
  deliveryFee: number
  couponAmount: number
  image: string
}

export default function RestaurantCard({
  id,
  name,
  rating,
  reviewCount,
  deliveryFee,
  couponAmount,
  image,
}: RestaurantProps) {
  return (
    <Link href={`/restaurant/${id}`}>
      <div className="flex gap-4 py-2 ">
        <Image src={kfc} alt={name} className="w-[100px] h-[100px] rounded-lg object-cover" />
        <div>
          <h3 className="text-lg font-extrabold text-black-700">{name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <RatingStarIcon />
            <span className="text-lg font-semibold text-black-700">{rating}</span>
            <span className="text-black-500 text-sm font-medium">({reviewCount})</span>
          </div>
          <p className=" text-black-500 text-sm font-medium">
            배달비 {deliveryFee.toLocaleString()}원
          </p>
        </div>
        <CouponBadge amount={couponAmount} />
      </div>
    </Link>
  )
}
