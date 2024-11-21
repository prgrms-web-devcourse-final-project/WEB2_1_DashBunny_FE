"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchUsers } from "@/lib/api";
import { UserType } from "@/types/user";

const User = () => {
  const [users, setUsers] = useState<UserType[]>();

  useEffect(() => {
    fetchUsers().then((data) => {
      //고객 불러오기 api
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <>
      <section>
        <div className="flex">
          <select className="border rounded-xl text-gray-500 p-2 w-48 shadow">
            <option value="작성자">작성자</option>
            <option value="제목">이메일</option>
          </select>

          <div className="ml-2 flex border p-2 w-full items-center border-gray-300 rounded-xl shadow">
            <Image
              src="/Icon/search.svg"
              alt="search icon"
              width={25}
              height={25}
            />
            <input placeholder="Search" className="outline-none mx-2 w-1/2" />
          </div>
        </div>
      </section>
      <main className="border h-[80vh] mt-5 rounded-2xl">
        <section className="p-6">
          <div className="flex items-center">
            <p className="font-bold text-2xl">DashBunny Members</p>
            <p className="border shadow rounded-xl w-20 text-center font-semibold text-gray-500 ml-auto">
              {users && users.length} users
            </p>
          </div>
          <p className="text-gray-400 font-semibold">
            Manager your customer and their account permissions here
          </p>
        </section>
        <section className="border-y flex p-5 h-10 items-center text-gray-400 font-semibold">
          <p className="w-1/6 text-center">Name</p>
          <p className="w-1/4 text-center">Role</p>
          <p className="w-1/4 text-center">Email address</p>
          <p className="w-1/6 text-center">Registration Date</p>
        </section>
        {users &&
          users.map((value, i) => (
            <section key={i} className="border-b p-5 flex items-center h-16">
              <div className="w-1/6 flex flex-col items-center">
                <p className="font-bold text-md">{value.name}</p>
                <p className="text-sm text-gray-500">{value.phone}</p>
              </div>
              <div className="w-1/4 flex justify-center">
                <p className="border rounded-xl shadow p-2 text-sm font-semibold">
                  {value.role}
                </p>
              </div>
              <p className="w-1/4 text-center">{value.email}</p>
              <p className="w-1/6 text-center">{value.createdDate}</p>
            </section>
          ))}
      </main>
    </>
  );
};

export default User;
