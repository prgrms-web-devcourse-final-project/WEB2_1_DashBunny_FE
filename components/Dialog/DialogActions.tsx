interface DialogActionsProps {
  children: React.ReactNode
}
export default function DialogActions({ children }: DialogActionsProps) {
  return <div className="flex justify-end gap-2 px-6 py-4 border-t">{children}</div>
}
