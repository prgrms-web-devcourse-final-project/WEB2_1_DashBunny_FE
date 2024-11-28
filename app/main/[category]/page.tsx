import React from "react"
import dynamic from "next/dynamic"

const DynamicRestaurantList = dynamic(() => import("@/components/main/RestaurantList"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function page({ params }: { params: { category: string } }) {
  return <DynamicRestaurantList category={params.category} />
}
