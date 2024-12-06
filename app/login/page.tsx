"use client";
import React, { useEffect, useState } from "react";
import { Login } from "@/lib/api";
import { LoginType } from "@/types/types";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [loginForm, setLoginForm] = useState<LoginType>({
    phone: "",
    password: "",
  });

  const FormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const LoginPost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Login(loginForm);
      router.replace("/");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-BunnyOrange w-full">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl animate-fade-in-down bg-opacity-50">
          <h2 className="text-2xl font-bold text-center text-BunnyOrange">
            DashBunny
          </h2>

          <form className="space-y-4" onSubmit={LoginPost}>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                전화번호
              </label>
              <input
                name="phone"
                id="userPhone"
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BunnyOrange focus:border-BunnyOrange"
                placeholder="01012345678"
                onChange={FormChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <input
                name="password"
                id="password"
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BunnyOrange focus:border-BunnyOrange"
                placeholder="비밀번호 입력"
                onChange={FormChange}
                type="password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-BunnyOrange rounded-lg shadow hover:focus:outline-none focus:ring-2 focus:ring-BunnyOrange focus:ring-offset-2 transform transition-transform hover:scale-105"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
