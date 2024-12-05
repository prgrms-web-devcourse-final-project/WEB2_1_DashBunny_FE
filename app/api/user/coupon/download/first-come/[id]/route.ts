import { NextResponse } from "next/server"
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// 쿠폰 발급 실패 (400 BAD REQUEST)
export async function POST(_request: Request, { params }: { params: { id: string } }) {
  // 예시로 random하게 응답 리턴 (실제로는 서버 로직에 따라 결정)
  await delay(2000)

  const random = Math.random()
  if (random < 0.3) {
    // 중복 발급
    return NextResponse.json({ error: "중복 다운로드가 불가능한 쿠폰입니다." }, { status: 400 })
  } else if (random < 0.6) {
    // 소진
    return NextResponse.json(
      { error: "선착순 쿠폰이 모두 소진되었습니다. 다음 이벤트를 기대해주세요!" },
      { status: 400 },
    )
  } else {
    // 성공
    return NextResponse.json({ message: "선착순 쿠폰 다운로드에 성공했습니다!" }, { status: 200 })
  }
}
