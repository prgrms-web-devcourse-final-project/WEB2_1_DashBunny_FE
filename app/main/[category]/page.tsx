import RestaurantList from "@/components/main/RestaurantList"

export default function page({ params }: { params: { category: string } }) {
  return <RestaurantList category={params.category} />
}
