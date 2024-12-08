import React from "react"
interface PhoneSignUpHeaderProps {
  step: number
}
export default function PhoneSignUpHeader({ step }: PhoneSignUpHeaderProps) {
  return (
    <h1 className="text-2xl font-bold mb-6 whitespace-pre-wrap">
      {step === 1
        ? "이름을\n입력해주세요"
        : step === 2
          ? "휴대폰 번호를\n입력해주세요"
          : step === 3
            ? "주민번호 앞 7자리를\n입력해주세요"
            : step === 4
              ? "비밀번호를\n입력해주세요"
              : step === 5
                ? "비밀번호를 다시 \n입력해주세요"
                : "정보가 맞다면\n인증하기 버튼을 눌러주세요"}
    </h1>
  )
}
