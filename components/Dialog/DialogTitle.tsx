interface DialogTitleProps {
  children: React.ReactNode
}
export default function DialogTitle({ children }: DialogTitleProps) {
  return <h2 className="text-lg font-semibold px-6 py-4 border-b">{children}</h2>
}
