import Header from "@/components/common/Header"
import MessageAuthenticationForm from "./MessageAuthenticationForm"

export default function page() {
  return (
    <>
      <Header previousRoute="/auth/sign-up" type="exit" />
      <MessageAuthenticationForm />
    </>
  )
}
