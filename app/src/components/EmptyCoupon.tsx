import React from "react"

const EmptyCoupon = () => {
  return (
    <button className="max-w-[400px] box-border h-full w-full cursor-default">
      <div className="bg-gradient-to-r from-gray-300 to-gray-400 text-white rounded-xl flex justify-between items-center p-3 relative h-full overflow-hidden">
        <div className="grid grid-cols-3 w-full">
          <div className="text-nowrap flex-col h-full col-span-2">
            <p className="font-bold text-lg">쿠폰이 다 떨어졌어요.</p>
            <p className="text-gray-200 text-sm">더 멋진 이벤트로 돌아올게요!</p>
          </div>
          <div className="text-lg font-bold flex items-center justify-center"></div>
        </div>

        <div className="absolute top-1/2 left-[248px] -translate-x-1/2 -translate-y-1/2 h-full border-l-2 border-dashed border-white/50" />
        <div className="absolute left-60 -bottom-2 w-4 h-4 bg-white/50 rounded-full" />
        <div className="absolute left-60 -top-2 w-4 h-4 bg-white/50 rounded-full" />
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full" />
      </div>
    </button>
  )
}

export default EmptyCoupon
