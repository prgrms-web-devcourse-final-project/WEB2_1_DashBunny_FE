"use client"
import MainCartIcon from "../icons/iconComponents/MainCartIcon"
import { ConfirmModal } from "../modal/ConfirmModal"

interface AnotherStoreConfirmDialogProps {
  isOpen: boolean
  close: () => void
  unmount: () => void
  handleConfirmOverwrite: (confirm: boolean) => void
}
export const AnotherStoreConfirmDialog = ({
  isOpen,
  close,
  unmount,
  handleConfirmOverwrite,
}: AnotherStoreConfirmDialogProps) => {
  const select = async (select: boolean) => {
    await handleConfirmOverwrite(select)
    console.log("전송 후 닫기")
    close()
    unmount()
  }

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => select(false)}
      onConfirm={() => select(true)}
      title={`장바구니에는 같은 가게의 메뉴만\n담을 수 있습니다.`}
      description={`선택하신 메뉴를 장바구니에 담을 경우\n이전에 담은 메뉴가 삭제됩니다.`}
      icon={<MainCartIcon />}
      confirmText="담기"
    />
  )
}
