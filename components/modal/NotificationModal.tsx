import { BaseModal } from "./BaseModal"

interface NotificationModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  type?: "success" | "error" | "info"
}

export function NotificationModal({
  isOpen,
  onClose,
  title,
  description,
  type = "info",
}: NotificationModalProps) {
  const iconColors = {
    success: "bg-green-100 text-green-600",
    error: "bg-red-100 text-red-600",
    info: "bg-blue-100 text-blue-600",
  }

  return (
    <BaseModal>
      <div
        className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full ${iconColors[type]}`}
      >
        {/* 타입에 따른 아이콘 */}
      </div>

      <h3 className="mb-4 text-center text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mb-6 text-center text-sm text-gray-500">{description}</p>

      <button
        onClick={onClose}
        className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        확인
      </button>
    </BaseModal>
  )
}
