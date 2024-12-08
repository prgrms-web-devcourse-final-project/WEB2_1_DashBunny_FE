import { useRouter } from "next/navigation"
import { BaseModal } from "./BaseModal"
export type NotificationType = "success" | "error" | "info"
export interface NotificationModalProps {
  close: () => void
  unmount: () => void
  type?: NotificationType
  title: string
  description?: string
  icon: React.ReactNode
  closeText: string
  nextUrl?: string
}

export function NotificationModal({
  close,
  title,
  description,
  unmount,
  type = "info",
  icon,
  closeText = "확인",
  nextUrl,
}: NotificationModalProps) {
  const router = useRouter()
  const iconColors = {
    success: "bg-green-100 text-green-600",
    error: "bg-red-100 text-red-600",
    info: "bg-blue-100 text-blue-600",
  }
  const onCloseHandler = () => {
    close()
    unmount()
    if (nextUrl) {
      router.push(nextUrl)
    }
  }

  return (
    <BaseModal>
      <div
        className={`mx-auto my-6 flex h-12 w-12 items-center justify-center rounded-full ${iconColors[type]}`}
      >
        {icon}
      </div>

      <h3 className="mb-4 text-center text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mb-6 text-center text-sm text-gray-500">{description}</p>

      <button
        onClick={onCloseHandler}
        className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none "
      >
        {closeText}
      </button>
    </BaseModal>
  )
}
