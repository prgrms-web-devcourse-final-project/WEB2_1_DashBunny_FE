"use client"
interface AnotherStoreMenuConfirmModalProps {
  handleConfirmOverwrite: (overwrite: boolean) => void
}
export default function AnotherStoreMenuConfirmModal({
  handleConfirmOverwrite,
}: AnotherStoreMenuConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-lg p-6 w-[320px] shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">장바구니 교체</h3>
        <div className="space-y-2 mb-6">
          <p className="text-gray-600">다른 가게의 메뉴가 이미 장바구니에 있습니다.</p>
          <p className="text-gray-600">기존 메뉴를 삭제하고 새로운 메뉴를 담으시겠습니까?</p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => handleConfirmOverwrite(false)}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            아니오
          </button>
          <button
            onClick={() => handleConfirmOverwrite(true)}
            className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors"
          >
            예
          </button>
        </div>
      </div>
    </div>
  )
}
