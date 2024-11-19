// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className=" h-full flex flex-col items-center px-6 ">
      {/* DASH 로고 */}
      <h1 className="text-orange-700 text-logo font-bold mt-[200px] mb-[120px]">DASH</h1>

      {/* 로그인 버튼들 */}
      <div className="w-full space-y-4 flex flex-col items-center">
        <button className="w-[342px] h-14 rounded-full bg-[#FEE500] text-black font-bold text-md">
          카카오로 계속하기
        </button>

        <button className="w-[342px] h-14 rounded-full bg-[#1F892A] text-white font-bold text-md">
          네이버로 계속하기
        </button>

        <button className="w-[342px] h-14 rounded-full bg-white border border-gray-300 text-black font-bold text-md">
          이메일로 계속하기
        </button>
      </div>

      {/* 계정 생성 링크 */}
      <p className="mt-auto mb-12 text-black-400 border-b border-black-400 text-xs">
        계정이 기억나지 않아요
      </p>
    </div>
  )
}
