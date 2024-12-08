"use client"
import React, { forwardRef } from "react"

interface UserInformation
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  maxLength: number
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  touched?: boolean
  enabled?: boolean
}

const InfoForm = forwardRef<HTMLInputElement, UserInformation>(
  (
    { label, maxLength, value, onChange, errorMessage, onBlur, touched, enabled = false, ...props },
    ref,
  ) => {
    return (
      <div className={`relative pb-5 ${label === "" && "w-12"}`}>
        <label className="text-xs text-nowrap absolute bg-white left-2 px-1 bottom-[68px] text-gray-500">
          {label}
        </label>
        <input
          readOnly={enabled}
          disabled={enabled}
          ref={ref}
          type="text"
          className={`w-full outline-none ${label === "" && "text-center"} p-4 border rounded-md ${
            touched && errorMessage && "border-red-500"
          } ${label === "" && "px-2"}`}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
        {touched && errorMessage && (
          <p className="text-red-500 text-nowrap text-xs absolute overflow-visible">
            {errorMessage}
          </p>
        )}
      </div>
    )
  },
)

export default InfoForm
