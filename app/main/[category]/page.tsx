import RestaurantList from "@/components/main/RestaurantList"
import React from "react"
import dynamic from "next/dynamic"

const DynamicAddressBar = dynamic(() => import("@/components/main/RestaurantList"), {
  ssr: false,
  loading: () => <div>loading...</div>,
})
export default function page({ params }: { params: { category: string } }) {
  console.log("🚀 ~ page ~ params:", params)
  return <DynamicAddressBar category={params.category} />
}
