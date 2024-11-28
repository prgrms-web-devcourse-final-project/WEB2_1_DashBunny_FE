import { wishList } from "@/constants/wishList"
import { NextRequest } from "next/server"

// POST: 위시리스트에 특정 가게 추가
export async function PATCH(request: NextRequest, { params }: { params: { storeId: string } }) {
  // URL에서 address 쿼리 파라미터 추출

  console.log("🚀 ~ Patch ~ menuId:", params.storeId)
  try {
    const body = await request.json()
    console.log(body) // 이제 JSON 데이터가 출력됨
    return Response.json({ message: "어 요청 왔어" }, { status: 201 })
  } catch (error) {
    return Response.json({ error: "Failed to add store to wishlist" }, { status: 500 })
  }
}
