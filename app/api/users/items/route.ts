import { NextRequest } from "next/server"

// POST: 위시리스트에 특정 가게 추가
export async function POST(request: NextRequest) {
  try {
    // 새로운 가게 추가
    const body = await request.json()
    console.log(body) // 이제 JSON 데이터가 출력됨
    return Response.json({ message: "menu added to cart" }, { status: 201 })
  } catch (error) {
    return Response.json({ error: "Failed to menu added to cart" }, { status: 500 })
  }
}
// POST: 위시리스트에 특정 가게 추가
export async function PATCH(request: NextRequest, { params }: { params: { menuId: string } }) {
  try {
    // 새로운 가게 추가
    const body = await request.json()
    console.log(body + "🥰") // 이제 JSON 데이터가 출력됨
    return Response.json({ message: "menu added to cart" }, { status: 201 })
  } catch (error) {
    return Response.json({ error: "Failed to menu added to cart" }, { status: 500 })
  }
}
