import { cartDummyData } from "@/mock/data/CartData"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const cart = await fetchStoresByCategory()
    return NextResponse.json(cart)
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}

// 실제 데이터를 가져오는 함수 (예시)
async function fetchStoresByCategory() {
  return cartDummyData
}
