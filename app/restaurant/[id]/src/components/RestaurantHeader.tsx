import React from "react"
import GoToBackButton from "@/components/common/GoToPreviousPageButton"
import PreviousPageArrowIcon from "@/components/icons/iconComponents/PreviousPageArrow"
import { useDetailStoreData } from "../hooks/useDetailStoreData"
import SaveHeartFillIcon from "@/components/icons/iconComponents/SaveHeartFillIcon"
import SaveHeartEmptyIcon from "@/components/icons/iconComponents/SaveHeartEmptyIcon"
import { useUpdateWish } from "@/app/wishList/hooks/useUpdateWish"
interface RestaurantHeaderProps {
  pathname: string
}

export default function RestaurantHeader({ pathname }: RestaurantHeaderProps) {
  const { data: detailStoreData, error, isLoading } = useDetailStoreData(pathname)
  const { updateWishMutation } = useUpdateWish()

  return (
    <header className=" mx-auto fixed top-0 w-[400px] left-0 right-0  z-10 p-[10px] flex justify-between">
      <div className=" flex justify-between items-center w-full ">
        <GoToBackButton icon={<PreviousPageArrowIcon />} />
        <button
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-50"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            updateWishMutation.mutate({ storeId: detailStoreData?.storeId ?? "" })
          }}
        >
          {detailStoreData?.wishStatus ? <SaveHeartFillIcon /> : <SaveHeartEmptyIcon />}
        </button>
      </div>
    </header>
  )
}
