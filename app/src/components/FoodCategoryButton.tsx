import Link from "next/link"

interface FoodCategoryButtonProps {
  category: string
  icon: React.ReactNode
  searchParamCategory: string
}
export default function FoodCategoryButton({
  category,
  icon,
  searchParamCategory = "KOREANSNACKS",
}: FoodCategoryButtonProps) {
  return (
    <Link href={`/main/KOREANSNACKS`}>
      <div className=" h-[82px] w-16 flex flex-col items-center justify-between pt-2">
        {icon}
        <div className="text-[14px]  text-black-700 text-center font-bold">{category}</div>
      </div>
    </Link>
  )
}
