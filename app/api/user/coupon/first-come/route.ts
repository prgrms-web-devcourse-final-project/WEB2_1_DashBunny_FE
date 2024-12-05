import { limitedCouponDummyData } from "@/mock/data/LimitedCouponData"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const random = Math.random()

    if (random < 0.3) {
      // 중복 발급
      return NextResponse.json(limitedCouponDummyData)
    } else if (random < 0.6) {
      // 소진
      return NextResponse.json({ message: "이미 선착순 쿠폰 이벤트에 참여하셨습니다." })
    } else if (random < 0.8) {
      return NextResponse.json({})
    } else {
      // 성공
      return NextResponse.json({ message: "선착순 쿠폰이 모두 소진되었습니다" })
    }
  } catch (error) {
    console.error("Store fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}
