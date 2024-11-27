import { wishList } from "@/constants/wishList"
import { NextRequest } from "next/server"

// 메모리에 데이터를 저장하기 위한 변수
let wishListData = [...wishList].map((store) => store.storeId)

// GET: 특정 가게의 위시리스트 상태 확인

// POST: 위시리스트에 특정 가게 추가
export async function POST(request: NextRequest, { params }: { params: { storeId: string } }) {
  console.log("🚀 ~ POST ~ storeId:", params.storeId)
  try {
    // 새로운 가게 추가
    wishListData.push(params.storeId)

    return Response.json(
      { message: "Store added to wishlist", store: wishListData },
      { status: 201 },
    )
  } catch (error) {
    return Response.json({ error: "Failed to add store to wishlist" }, { status: 500 })
  }
}

// DELETE: 위시리스트에서 특정 가게 삭제
export async function DELETE(request: NextRequest, { params }: { params: { storeId: string } }) {
  try {
    console.log("🚀 ~ POST ~ storeId:", params.storeId)
    const initialLength = wishListData.length
    wishListData = wishListData.filter((store) => store !== params.storeId)

    if (wishListData.length === initialLength) {
      return Response.json({ error: "Store not found in wishlist" }, { status: 404 })
    }

    return Response.json(
      { message: "Store removed from wishlist", storeId: params.storeId },
      { status: 200 },
    )
  } catch (error) {
    return Response.json({ error: "Failed to remove store from wishlist" }, { status: 500 })
  }
}
