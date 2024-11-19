interface ColorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  onClick: () => void
  size: "small" | "large"
  icon?: React.ReactNode
}

export default function ColorButton({
  text,
  onClick,
  size = "large",
  icon,
  ...props
}: ColorButtonProps) {
  return (
    <div
      className={`bg-orange-700 items-center justify-center flex ${size === "small" ? "w-44 h-12 rounded-full" : "w-[373px] h-[51px] rounded-[10px] "}`}
    >
      <button
        className={` text-white font-semibold text-button text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
        onClick={onClick}
        {...props}
      >
        {icon} {text}
      </button>
    </div>
  )
}
