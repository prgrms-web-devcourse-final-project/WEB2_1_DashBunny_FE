"use client"

type WishButtonProps = {
  is_wish: boolean
  user_id: string
  store_id: string
}
//is_wish가 트루면 💖 아니면 🤍을 보여준다.
export default function WishButton({ is_wish, store_id, user_id }: WishButtonProps) {
  return (
    <button
      onClick={() => {}}
      className="right-2 top-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
    >
      {is_wish ? "💖" : "🤍"}
    </button>
  )
}
