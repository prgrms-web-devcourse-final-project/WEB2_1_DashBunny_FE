import AlertIcon from "@/components/icons/iconComponents/AlertIcon"
export type IconComponent = React.FC<{ className?: string }>
type FoodCategory = {
  key:
    | "KOREAN"
    | "JAPANESE"
    | "WESTERN"
    | "CHINESE"
    | "ASIAN"
    | "LATE_NIGHT_FOOD"
    | "KOREAN_SNACKS"
    | "CHICKEN"
    | "PIZZA"
    | "BARBECUE"
    | "CAFE_AND_DESSERT"
    | "FAST_FOOD"
  name: string
  englishName: string
  icon: IconComponent
}
export const foodCategories: FoodCategory[] = [
  {
    key: "KOREAN",
    name: "한식",
    englishName: "Korean",
    icon: AlertIcon,
  },
  {
    key: "JAPANESE",
    name: "일식",
    englishName: "Japanese",
    icon: AlertIcon,
  },
  {
    key: "WESTERN",
    name: "양식",
    englishName: "Western",
    icon: AlertIcon,
  },
  {
    key: "CHINESE",
    name: "중식",
    englishName: "Chinese",
    icon: AlertIcon,
  },
  {
    key: "ASIAN",
    name: "아시안",
    englishName: "Asian",
    icon: AlertIcon,
  },
  {
    key: "LATE_NIGHT_FOOD",
    name: "야식",
    englishName: "Late Night Food",
    icon: AlertIcon,
  },
  {
    key: "KOREAN_SNACKS",
    name: "분식",
    englishName: "Korean Snacks",
    icon: AlertIcon,
  },
  {
    key: "CHICKEN",
    name: "치킨",
    englishName: "Chicken",
    icon: AlertIcon,
  },
  {
    key: "PIZZA",
    name: "피자",
    englishName: "Pizza",
    icon: AlertIcon,
  },
  {
    key: "BARBECUE",
    name: "고기",
    englishName: "Barbecue",
    icon: AlertIcon,
  },
  {
    key: "CAFE_AND_DESSERT",
    name: "카페디저트",
    englishName: "Cafe & Dessert",
    icon: AlertIcon,
  },
  {
    key: "FAST_FOOD",
    name: "패스트푸드",
    englishName: "Fast Food",
    icon: AlertIcon,
  },
] as const
