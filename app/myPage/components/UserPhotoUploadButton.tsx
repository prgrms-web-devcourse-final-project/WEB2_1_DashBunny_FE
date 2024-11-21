"use client"
import ColorButton from "@/components/common/ColorButton"
import UserPhotoIcon from "@/components/icons/iconComponents/UserPhotoIcon"
import React, { useRef } from "react"

export default function UserPhotoUploadButton() {
  const fileInput = useRef<HTMLInputElement>(null)
  const handleIconClick = () => {
    fileInput.current?.click()
  }
  return (
    <>
      <div className="w-full flex p-8 items-center justify-center ">
        <button onClick={handleIconClick}>
          <UserPhotoIcon />
        </button>
      </div>
      <input ref={fileInput} type="file" className="hidden"></input>
      <input
        type="text"
        placeholder="닉네임 입력 (10자 이내)"
        className="w-full mt-8 mb-6 p-4 rounded-lg border border-gray-400 text-gray-600 placeholder-gray-400"
      />
      <ColorButton onClick={() => {}} size="large" text="저장" />
    </>
  )
}
