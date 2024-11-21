import Header from "@/components/common/Header"
import UserPhotoUploadButton from "../components/UserPhotoUploadButton"

export default function page() {
  return (
    <>
      <Header title="프로필 수정" previousRoute="myPage" />
      <div className="p-5">
        <UserPhotoUploadButton />
      </div>
    </>
  )
}
