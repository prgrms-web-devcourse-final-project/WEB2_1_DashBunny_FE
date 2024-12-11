interface CouponBadgeProps {
  amount: number
}

export default function CouponBadge({ amount }: CouponBadgeProps) {
  const getCouponStyle = (amount: number) => {
    if (amount <= 2000) {
      return {
        background: "bg-blue-50",
        text: "text-blue-700",
      }
    }
    if (amount <= 4000) {
      return {
        background: "bg-green-50",
        text: "text-green-700",
      }
    }
    return {
      background: "bg-orange-50",
      text: "text-orange-700",
    }
  }

  const style = getCouponStyle(amount)

  return (
    <span
      className={`
          inline-block font-semibold mt-1 py-1 px-3 
          ${style.background} ${style.text} 
          rounded-full text-xs h-7
        `}
    >
      {amount}원 쿠폰
    </span>
  )
}
