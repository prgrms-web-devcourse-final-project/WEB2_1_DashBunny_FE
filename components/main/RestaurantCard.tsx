"use client"
import Image from "next/image"
import RatingStarIcon from "../icons/iconComponents/RatingStarIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SaveHeartNavFillIcon from "../icons/iconComponents/SaveHeartNavFillIcon"
import { UsersStoreListResponseDto } from "@/types/Store"
import { useUpdateWish } from "@/app/wishList/hooks/useUpdateWish"

export default function RestaurantCard({
  storeId,
  storeName,
  rating,
  reviewCount,

  storeLogo,
}: UsersStoreListResponseDto) {
  console.log({ storeId, storeName, rating, reviewCount, storeLogo })
  const pathName = usePathname()
  const { updateWishMutation } = useUpdateWish()
  return (
    <div className="flex gap-4 py-2 relative">
      <Image
        width={84}
        height={84}
        src={storeLogo}
        alt={storeName}
        className="w-[84px] h-[84px] rounded-lg object-cover"
      />
      <div>
        <div className=" flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-black-700">{storeName}</h3>
        </div>
        <div className="flex items-center gap-1 ">
          <RatingStarIcon />
          <span className="text-lg font-semibold text-black-700">{rating}</span>
          <span className="text-black-500 text-sm font-medium">({reviewCount})</span>
        </div>
      </div>
      <Link href={`/restaurant/${storeId}`}>이동</Link>
      {pathName == "/wishList" && (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            updateWishMutation.mutate({ storeId })
          }}
          className="absolute left-[340px] top-9"
        >
          <SaveHeartNavFillIcon />
        </button>
      )}
    </div>
  )
}
