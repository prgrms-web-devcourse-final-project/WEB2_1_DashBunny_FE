import { cartDummyData } from "@/mock/data/CartData"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log("Received body:", body)
  try {
    return new NextResponse("안녕")
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}
