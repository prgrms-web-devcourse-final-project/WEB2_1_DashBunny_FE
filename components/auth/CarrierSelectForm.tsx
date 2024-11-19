import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const CarrierSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCarrier, setSelectedCarrier] = useState("통신사 선택")

  const carriers = ["SKT", "KT", "LG U+", "SKT 알뜰폰", "KT 알뜰폰", "LG U+ 알뜰폰"]

  return (
    <div className="relative">
      <label className="text-sm text-gray-500">통신사</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 border rounded-lg text-left flex justify-between items-center bg-white hover:bg-gray-50"
      >
        {selectedCarrier}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {carriers.map((carrier) => (
            <button
              key={carrier}
              onClick={() => {
                setSelectedCarrier(carrier)
                setIsOpen(false)
              }}
              className="w-full p-4 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {carrier}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarrierSelect
