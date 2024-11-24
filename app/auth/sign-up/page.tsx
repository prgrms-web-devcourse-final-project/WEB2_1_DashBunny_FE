import Link from "next/link"

// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className=" h-full flex flex-col items-center px-6 ">
      {/* DASH 로고 */}
      <h1 className="text-orange-700 text-logo font-bold mt-[200px] mb-[120px]">DASH</h1>

      {/* 로그인 버튼들 */}
      <div className="w-full space-y-4 flex flex-col items-center">
        <Link
          href="/auth/sign-up/user-info"
          className="w-[342px] h-14 rounded-full bg-[#FEE500] text-black font-bold text-md flex items-center justify-center"
        >
          <p>카카오로 회원가입</p>
        </Link>

        <Link
          href="/auth/sign-up/phone-signup"
          className="w-[342px] h-14 rounded-full bg-white border border-gray-300 text-black font-bold text-md  flex items-center justify-center"
        >
          <p>휴대폰 번호로 회원가입</p>
        </Link>
      </div>

      {/* 계정 생성 링크 */}
      <Link href="/auth/sign-in">
        <div className="flex gap-1 items-center justify-center border-b mt-12">
          <span className=" text-black-400  border-black-400 text-xs">계정이 있으시다면?</span>
          <span className="text-xs font-semibold text-orange-700">로그인하기</span>
        </div>
      </Link>
    </div>
  )
}
