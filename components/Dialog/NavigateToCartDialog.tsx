"use client"
import { useRouter } from "next/navigation"
import MainCartIcon from "../icons/iconComponents/MainCartIcon"
import { ConfirmModal } from "../modal/ConfirmModal"

interface NavigateToCartDialogProps {
  isOpen: boolean
  close: () => void
  unmount: () => void
}

export function NavigateToCartDialog({ isOpen, close, unmount }: NavigateToCartDialogProps) {
  const router = useRouter()

  function handleSelection(shouldNavigate: boolean) {
    if (shouldNavigate) {
      router.push("/cart")
    }
    close()
    unmount()
  }

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => handleSelection(false)}
      onConfirm={() => handleSelection(true)}
      title="장바구니에 메뉴가 담겼습니다."
      description="장바구니로 이동하시겠습니까?"
      icon={<MainCartIcon />}
      confirmText="이동"
    />
  )
}
