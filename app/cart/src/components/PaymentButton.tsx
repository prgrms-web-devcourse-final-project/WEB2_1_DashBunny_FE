"use client"
import ColorButton from "../../../../components/common/ColorButton"
interface PaymentButtonProps {
  text: string
  onClick: () => void
}
export default function PaymentButton({ text, onClick }: PaymentButtonProps) {
  const paymentHandler = () => {
    onClick()
  }
  return (
    <div className="p-3 bg-white fixed bottom-0 max-w-[360px] w-full mx-auto flex justify-center items-center ">
      <ColorButton onClick={paymentHandler} size="large" text={text} />
    </div>
  )
}
