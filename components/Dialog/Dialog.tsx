interface DialogProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}
export default function Dialog({ children, isOpen, onClose }: DialogProps) {
  return (
    <div className={`${isOpen ? "fixed inset-0 z-50 flex items-center justify-center" : "hidden"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full m-4">{children}</div>
    </div>
  )
}
