"use client"

import Dialog from "./Dialog"
import DialogActions from "./DialogActions"
import DialogButton from "./DialogButton"
import DialogTitle from "./DialogTitle"
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
    <Dialog isOpen={isOpen} onClose={close}>
      <DialogTitle>정말로 계속하시겠어요?</DialogTitle>
      <DialogActions>
        <DialogButton onClick={() => select(false)} variant="secondary">
          아니요
        </DialogButton>
        <DialogButton onClick={() => select(true)}>네</DialogButton>
      </DialogActions>
    </Dialog>
  )
}
