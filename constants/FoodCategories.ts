import AlertIcon from "@/components/icons/iconComponents/AlertIcon"
export type IconComponent = React.FC<{ className?: string }>
type FoodCategory = {
  key:
    | "KOREAN"
    | "JAPANESE"
    | "WESTERN"
    | "CHINESE"
    | "ASIAN"
    | "LATENIGHTFOOD"
    | "KOREANSNACKS"
    | "CHICKEN"
    | "PIZZA"
    | "BARBECUE"
    | "CAFEANDDESSERT"
    | "FASTFOOD"
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
    key: "LATENIGHTFOOD",
    name: "야식",
    englishName: "Late Night Food",
    icon: AlertIcon,
  },
  {
    key: "KOREANSNACKS",
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
    key: "CAFEANDDESSERT",
    name: "카페디저트",
    englishName: "Cafe & Dessert",
    icon: AlertIcon,
  },
  {
    key: "FASTFOOD",
    name: "패스트푸드",
    englishName: "Fast Food",
    icon: AlertIcon,
  },
] as const
