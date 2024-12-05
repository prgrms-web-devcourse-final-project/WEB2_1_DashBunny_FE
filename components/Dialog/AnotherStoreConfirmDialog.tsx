"use client"
import MainCartIcon from "../icons/iconComponents/MainCartIcon"
import { ConfirmModal } from "../modal/ConfirmModal"

interface AnotherStoreConfirmDialogProps {
  isOpen: boolean
  close: () => void
  unmount: () => void
  //promise를 리턴
  handleConfirmOverwrite: (confirm: boolean) => Promise<void>
}
export const AnotherStoreConfirmDialog = ({
  isOpen,
  close,
  unmount,
  handleConfirmOverwrite,
}: AnotherStoreConfirmDialogProps) => {
  //데이터 요청 후 모달이 닫히게 하기 위해 async, await 사용
  const select = async (select: boolean) => {
    await handleConfirmOverwrite(select)

    close()
    unmount()
  }

  return (
    <ConfirmModal
      isOpen={isOpen}
      promiseClose={() => select(false)}
      promiseConfirm={() => select(true)}
      title={`장바구니에는 같은 가게의 메뉴만\n담을 수 있습니다.`}
      description={`선택하신 메뉴를 장바구니에 담을 경우\n이전에 담은 메뉴가 삭제됩니다.`}
      icon={<MainCartIcon />}
      confirmText="담기"
    />
  )
}
