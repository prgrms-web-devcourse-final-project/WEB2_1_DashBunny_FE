"use client"
import React, { useState } from "react"
import SelectorArrowIcon from "../icons/iconComponents/SelectorArrowIcon"

interface SelectProps {
  placeholder?: string
  options?: { value: string; label: string }[]
  onChange?: (value: string) => void
  value?: string
}

export const Select = ({
  placeholder = "결제수단을 선택해주세요",
  options = [],
  onChange,
  value,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (value: string) => {
    onChange?.(value)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-[14px] px-4 py-3 rounded-lg bg-black-100 text-left flex items-center justify-between text-black-600 hover:bg-gray-50 focus:outline-none  shadow-sm"
      >
        <span>{value || placeholder}</span>
        <SelectorArrowIcon />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 rounded-lg shadow-lg border border-gray-200">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => handleSelect(option.value)}
                  className="w-full bg-white px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
