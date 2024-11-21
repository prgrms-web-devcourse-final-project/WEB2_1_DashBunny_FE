import AlertIcon from "@/components/icons/iconComponents/AlertIcon"
import AnnouncementSpeakerIcon from "@/components/icons/iconComponents/AnnouncementSpeakerIcon"
import MapPinIcon from "@/components/icons/iconComponents/MapPinIcon"
import MarkerIcon from "@/components/icons/iconComponents/MarkerIcon"
import MiniGoToDetailPageArrowIcon from "@/components/icons/iconComponents/MiniGoToDetailPageArrowIcon"

interface MenuItem {
  icon: React.ReactNode
  title: string
  description: string
}

export default function MenuList() {
  const menuItems: MenuItem[] = [
    {
      icon: <MarkerIcon />,
      title: "주소 관리",
      description: "배송지를 관리하세요",
    },
    {
      icon: <AnnouncementSpeakerIcon />,
      title: "공지사항",
      description: "새로운 소식을 확인하세요",
    },
  ]

  return (
    <div>
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center">
              <span className="text-xl">{item.icon}</span>
            </div>
            <div className="text-left">
              <h3 className="text-black-700 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
          <MiniGoToDetailPageArrowIcon />
        </button>
      ))}
    </div>
  )
}
