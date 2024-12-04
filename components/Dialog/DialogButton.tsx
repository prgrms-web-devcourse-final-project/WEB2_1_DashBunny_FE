interface DialogButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary"
}
export default function DialogButton({
  children,
  onClick,
  variant = "primary",
}: DialogButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  )
}
