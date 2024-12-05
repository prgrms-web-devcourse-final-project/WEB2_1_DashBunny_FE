import React from "react"
import { BaseModal } from "./BaseModal"

interface ConfirmModalProps {
  isOpen: boolean
  icon?: React.ReactNode
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  onClose?: () => void | Promise<void>
  onConfirm?: () => void | Promise<void>
  promiseClose?: () => Promise<void>
  promiseConfirm?: () => Promise<void>
}

export function ConfirmModal({
  isOpen,
  icon,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onClose,
  onConfirm,
  promiseClose,
  promiseConfirm,
}: ConfirmModalProps) {
  const handleConfirm = () => {
    if (promiseConfirm) {
      promiseConfirm()
    } else if (onConfirm) {
      onConfirm()
    }
  }
  const handleClose = async () => {
    if (promiseClose) {
      promiseClose()
    } else if (onClose) {
      onClose()
    }
  }
  return (
    <BaseModal>
      <h3 className="mb-4 text-center whitespace-pre-wrap text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mb-6 text-center whitespace-pre-wrap text-sm text-gray-500">{description}</p>
      <div className="flex gap-3">
        <button
          onClick={handleClose}
          className="flex-1 rounded-md  bg-black-200 px-4 py-2 text-sm font-medium text-gray-700  hover:bg-black-300  "
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600  "
        >
          {confirmText}
        </button>
      </div>
    </BaseModal>
  )
}
