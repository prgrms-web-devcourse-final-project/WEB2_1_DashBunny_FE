import Image from "next/image"
import GoToDetailPageArrowIcon from "../icons/iconComponents/GoToDetailPageArrowIcon"
import PreviousPageArrowIcon from "../icons/iconComponents/PreviousPageArrow"
import SaveHeartEmptyIcon from "../icons/iconComponents/SaveHeartEmptyIcon"
import bigkfc from "@/public/image/bbq.png"
import BigRatingStarIcon from "../icons/iconComponents/BigRatingStar"
interface RestaurantHeaderProps {
  name: string
  rating: number
  minOrderAmount: number
  deliveryFee: number
  storeImage: string
}
export const RestaurantHeader = ({
  name,
  rating,
  minOrderAmount,
  deliveryFee,
  storeImage,
}: RestaurantHeaderProps) => (
  <div className="mb-4">
    <Image
      src={storeImage}
      alt="KFC"
      width={400}
      height={224}
      className="w-full h-56 object-cover"
    />
    <div className="px-4 space-y-4">
      <div className="flex items-center pt-3">
        <div className="flex-1" />
        <h1 className="flex-1 text-center text-2xl font-bold">{name}</h1>
        <div className="flex-1 flex justify-end">
          <GoToDetailPageArrowIcon />
        </div>
      </div>
      <div className="flex justify-center gap-1 items-center ">
        <BigRatingStarIcon />
        <p className="font-semibold text-md text-black-700">{rating} 리뷰</p>
      </div>
      <div className="space-y-2 text-gray-600">
        <div className="flex text-sm text-black-500">
          <span className="font-bold min-w-24">최소주문금액</span>
          <span className="font-medium">{minOrderAmount.toLocaleString()}원</span>
        </div>
        <div className="flex text-sm text-black-500">
          <span className="font-bold min-w-24">배달팁</span>
          <span className="font-medium">무료 ~ {deliveryFee.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  </div>
)
