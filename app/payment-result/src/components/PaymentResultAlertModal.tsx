"use client"
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
  //데이터 요청 후 모달이 닫히게 하기 위해 async, await 사용
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
