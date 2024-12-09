"use client"
import StorySkeleton from "./src/components/ShortsSkeleton"
import { VideoItem } from "./src/components/VideoItem"
import { useGetShortsList } from "./src/hooks/useGetShortsList"
import { useState, useEffect } from "react"

const INITIAL_LOAD_COUNT = 5
const LOAD_MORE_COUNT = 5

const VideoFeed = () => {
  const { data: shortsData, isLoading, isError } = useGetShortsList()
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT)

  useEffect(() => {
    if (!shortsData) return // shortsData가 없으면 early return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const index = Number(element.dataset.index)
            if (index === visibleCount - 3 && visibleCount < shortsData.length) {
              setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, shortsData.length))
            }
          }
        })
      },
      { threshold: 0.7 },
    )

    const elements = document.getElementsByClassName("video-item")
    Array.from(elements).forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [visibleCount, shortsData])

  const videoId = (shortsUrl: string) => {
    return shortsUrl.split("/shorts/")[1]
  }

  if (isLoading) return <StorySkeleton />
  if (isError) return <div>에러가 발생했습니다.</div>
  if (!shortsData) return null // 데이터가 없는 경우 처리

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {shortsData.slice(0, visibleCount).map((shorts, index) => (
        <div key={shorts.shortsUrl} className="video-item snap-start" data-index={index}>
          <VideoItem
            menuId={1}
            videoId={videoId(shorts.shortsUrl)}
            accountName={shorts.storeName}
          />
        </div>
      ))}
    </div>
  )
}

export default VideoFeed
