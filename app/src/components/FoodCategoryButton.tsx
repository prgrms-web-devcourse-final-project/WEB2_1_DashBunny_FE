import Link from "next/link"
import Image from "next/image"
interface FoodCategoryButtonProps {
  category: string
  image: string
  onClick?: () => void
}
export default function FoodCategoryButton({ category, image, onClick }: FoodCategoryButtonProps) {
  return (
    <Link href={`/main`}>
      <div className=" h-[82px] w-16 flex flex-col items-center justify-between">
        <Image src={image} width={56} height={56} alt={category} />
        <div className="text-[14px] text-black-700 text-center font-bold">{category}</div>
      </div>
    </Link>
  )
}
