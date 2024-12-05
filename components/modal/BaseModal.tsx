interface BaseModalProps {
  children: React.ReactNode
}

export function BaseModal({ children }: BaseModalProps) {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm " />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="relative w-full max-w-80 transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
