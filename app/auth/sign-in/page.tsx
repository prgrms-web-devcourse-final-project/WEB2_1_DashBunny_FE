import Link from "next/link"

// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className=" h-full flex flex-col items-center px-6 ">
      {/* DASH 로고 */}
      <h1 className="text-orange-700 text-logo font-bold mt-[200px] mb-[120px]">DASH</h1>

      {/* 로그인 버튼들 */}
      <div className="w-full space-y-4 flex flex-col items-center">
        <button className="w-[342px] h-14 rounded-full bg-[#FEE500] text-black font-bold text-md">
          카카오로 로그인
        </button>

        <Link href="/auth/sign-in/phone-sign-in">
          <div className="w-[342px] h-14 rounded-full bg-white border border-gray-300 text-black font-bold text-md flex items-center justify-center">
            휴대폰 번호로 로그인
          </div>
        </Link>
      </div>

      <Link href="/auth/sign-up">
        <div className="flex gap-1 items-center justify-center border-b mt-12">
          <span className=" text-black-400  border-black-400 text-xs">계정이 없으시다면?</span>
          <span className="text-xs font-semibold text-orange-700">회원가입하기</span>
        </div>
      </Link>
    </div>
  )
}
