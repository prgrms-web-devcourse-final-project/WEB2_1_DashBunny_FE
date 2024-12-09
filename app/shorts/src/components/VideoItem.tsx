"use client"
import { useAddCartItem } from "@/app/cart/src/hook"
import MainCartIcon from "@/components/icons/iconComponents/MainCartIcon"
import SaveHeartEmptyIcon from "@/components/icons/iconComponents/SaveHeartEmptyIcon"
import ShortsCartIcon from "@/components/icons/iconComponents/ShortsCartIcon"
import React, { useState, useRef, useEffect } from "react"
interface VideoItemProps {
  videoId: string
  accountName: string
  menuId: number
}
export const VideoItem = ({ videoId, accountName, menuId }: VideoItemProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.7 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const { addCart } = useAddCartItem()
  const addToCartHandler = () => {
    addCart({ menuId, quantity: 1 })
  }
  return (
    <div ref={videoRef} className="relative w-full h-screen flex-shrink-0 overflow-hidden">
      {/* YouTube iframe */}
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isVisible ? 1 : 0}&controls=0&mute=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Top shadow overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-44"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Header */}
      <div className="absolute z-10 top-0 left-0 right-0 flex justify-between items-center p-4">
        <span className="text-sm text-white">{accountName}</span>
        <SaveHeartEmptyIcon />
      </div>

      {/* Bottom shadow overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-60"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Bottom text and button */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center gap-2 p-4">
        <span className="text-sm text-white font-bold">지금 보는 메뉴</span>
        <button
          onClick={addToCartHandler}
          className="bg-orange-700 text-lg font-bold text-white px-8 py-2.5 rounded-full items-center flex gap-3"
        >
          <ShortsCartIcon />
          <span>주문하기</span>
        </button>
      </div>
    </div>
  )
}
