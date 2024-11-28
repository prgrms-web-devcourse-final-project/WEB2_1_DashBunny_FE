import { detailedStoreData } from "@/constants/storeDetailData"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // URL에서 address 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url)
    const storeId = searchParams.get("storeId")
    // address가 없는 경우 에러 반환
    if (!storeId) {
      return NextResponse.json({ error: "storeId is required" }, { status: 400 })
    }

    const stores = await fetchStoresByCategory(storeId)
    return NextResponse.json(stores)
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 })
  }
}

// 실제 데이터를 가져오는 함수 (예시)
async function fetchStoresByCategory(storeId: string) {
  const store = detailedStoreData.find((store) => {
    return store.storeId === storeId
  })
  return store
}
