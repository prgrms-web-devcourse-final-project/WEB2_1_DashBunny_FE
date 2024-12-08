"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import React from "react";

const TokenCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken"); // TODO:refreshToken 처리
    if (accessToken) {
      return;
    } else {
      router.push("/login");
    }
  }, [router]);

  return null;
};

export default TokenCheck;
