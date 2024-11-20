"use client"
import ColorButton from "@/components/common/ColorButton"
import PreviousPageArrowIcon from "@/components/icons/iconComponents/PreviousPageArrow"
import SaveHeartEmptyIcon from "@/components/icons/iconComponents/SaveHeartEmptyIcon"
import { RestaurantHeader } from "@/components/restaurant/Header"
import { MenuItem } from "@/components/restaurant/MenuItem"
import Link from "next/link"
//추가@=> 사진밑에 닿으면 뒤로가기, 가게명, 하트 일렬로 sticky
export default function RestaurantDetail() {
  return (
    <div className="pb-24">
      <header className=" mx-auto fixed top-0 w-[400px] left-0 right-0  z-10 p-[10px] flex justify-between">
        <Link href="/main">
          <PreviousPageArrowIcon />
        </Link>
        <button>
          <SaveHeartEmptyIcon />
        </button>
      </header>
      <RestaurantHeader name="KFC" rating={4.9} minOrderAmount={15000} deliveryFee={2000} />
      <div className="space-y-4">
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
        <MenuItem
          name="맛있는 치킨 한 바구니"
          price={19500}
          description="아주 맛있습니다. 바삭바삭하고 매콤하고 들아서면 또 먹고싶은 맛"
          image={"/kfc.jpg"}
        />
      </div>
      <div className="p-3 bg-white fixed bottom-0 max-w-[400px] w-full mx-auto flex justify-center items-center ">
        <ColorButton onClick={() => null} size="large" text={"19500원 결제하기"} />
      </div>
    </div>
  )
}
