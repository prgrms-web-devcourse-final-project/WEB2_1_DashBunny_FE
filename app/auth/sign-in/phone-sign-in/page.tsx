import React from "react"
import PhoneSignInForm from "./src/components/PhoneSignInForm"
import Header from "@/components/common/Header"

export default function page() {
  return (
    <>
      <Header previousRoute="/auth/sign-in" type="exit" />

      <PhoneSignInForm />
    </>
  )
}
