import { restaurantList } from "@/constants/restaurantList"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // URL에서 address 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url)
    const address = searchParams.get("address")

    // address가 없는 경우 에러 반환
    if (!address) {
      return NextResponse.json({ error: "Address is required" }, { status: 400 })
    }

    // 예시 응답 데이터
    const stores = await fetchStoresByCategory(address)
    return NextResponse.json(stores)
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 })
  }
}

async function fetchStoresByCategory(address: string) {
  return restaurantList
}

// POST: 위시리스트에 특정 가게 추가
export async function POST(request: NextRequest, { params }: { params: { address: string } }) {
  console.log(params)
  return Response.json("")
}
