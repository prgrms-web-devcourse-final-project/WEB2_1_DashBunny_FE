import React from "react"
import KoreanFoodIcon from "./KoreanFoodIcon"
import JapaneseFoodIcon from "./JapaneseFoodIcon"
import WesternFoodIcon from "./WesternFoodIcon"
import ChineseFoodIcon from "./ChineseFoodIcon"
import AsianFoodIcon from "./AsianFoodIcon"
import LateNightFoodFoodIcon from "./LateNightFoodFoodIcon"
import KoreanSnacksFoodIcon from "./KoreanSnacksFoodIcon"
import ChickenFoodIcon from "./ChickenFoodIcon"
import PizzaFoodIcon from "./PizzaFoodIcon"
import BarbecueFoodIcon from "./BarbecueFoodIcon"
import CafeAndDessertFoodIcon from "./CafeAndDessertFoodIcon"
import FastFoodFoodIcon from "./FastFoodFoodIcon"

// 아이콘 컴포넌트 매핑
export const getCategoryIcon = (categoryName: string): React.ReactNode => {
  switch (categoryName) {
    case "한식":
      return KoreanFoodIcon()
    case "일식":
      return JapaneseFoodIcon()
    case "양식":
      return WesternFoodIcon()
    case "중식":
      return ChineseFoodIcon()
    case "아시안":
      return AsianFoodIcon()
    case "야식":
      return LateNightFoodFoodIcon()
    case "분식":
      return KoreanSnacksFoodIcon()
    case "치킨":
      return ChickenFoodIcon()
    case "피자":
      return PizzaFoodIcon()
    case "고기":
      return BarbecueFoodIcon()
    case "카페디저트":
      return CafeAndDessertFoodIcon()
    case "패스트푸드":
      return FastFoodFoodIcon()
    default:
      return
  }
}
