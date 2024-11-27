// app/api/users/store/[category]/route.ts
import { restaurantList } from "@/constants/restaurantList"
import { wishList } from "@/constants/wishList"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { category: string } }) {
  try {
    // URL에서 address 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url)
    const address = searchParams.get("address")
    const category = params.category

    // address가 없는 경우 에러 반환
    if (!address) {
      return NextResponse.json({ error: "Address is required" }, { status: 400 })
    }

    // 여기에 실제 데이터베이스 쿼리나 외부 API 호출 로직 구현
    // 예시 응답 데이터
    const stores = await fetchStoresByCategory(category, address)
    return NextResponse.json(stores)
    // return NextResponse.json({
    //   stores,
    //   metadata: {
    //     category,
    //     address,
    //     totalCount: stores.length,
    //   },
    // })
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 })
  }
}

// 실제 데이터를 가져오는 함수 (예시)
async function fetchStoresByCategory(category: string, address: string) {
  // 여기에 실제 데이터베이스 쿼리나 외부 API 호출 구현
  // 예시 데이터
  return restaurantList
}
