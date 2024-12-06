import UserInfoForm from "@/components/auth/UserInfoForm"
import Header from "@/components/common/Header"

export default function page() {
  return (
    <>
      <Header previousRoute="/auth/sign-up" type="exit" />
      <UserInfoForm />
    </>
  )
}
