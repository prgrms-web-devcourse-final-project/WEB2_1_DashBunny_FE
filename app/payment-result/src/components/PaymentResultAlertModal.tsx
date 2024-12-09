"use client"
import { useGetCartItem } from "@/app/cart/src/hook"
import SuccessCircleIcon from "@/components/icons/iconComponents/\bSuccessCircleIcon"
import AlertCircleIcon from "@/components/icons/iconComponents/AlertCircleIcon"
import { NotificationModal, NotificationType } from "@/components/modal/NotificationModal"

interface PaymentResultAlertModalProps {
  isOpen: boolean

  close: () => void
  unmount: () => void
  type: NotificationType
  title: string
  description: string
}
export const PaymentResultAlertModal = ({
  close,
  unmount,
  type,
  description,
  title,
}: PaymentResultAlertModalProps) => {
  return (
    <NotificationModal
      close={close}
      title={title}
      description={type === "error" ? description : ""}
      type={type}
      unmount={unmount}
      icon={type === "success" ? <SuccessCircleIcon /> : <AlertCircleIcon />}
      closeText={type === "success" ? "주문내역으로" : "홈으로"}
      nextUrl={type === "success" ? "/orderList" : "/"}
    />
  )
}
