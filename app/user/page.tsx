import Image from "next/image";

const User = () => {
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
              {45} users
            </p>
          </div>
          <p className="text-gray-400 font-semibold">
            Manager your customer and their account permissions here
          </p>
        </section>
        <section className="border-y flex p-5 h-10 items-center text-gray-400 font-semibold">
          <p className="w-1/3">Name</p>
          <p className="w-1/4">Role</p>
          <p className="w-1/4">Email address</p>
          <p>Registration Date</p>
        </section>
      </main>
    </>
  );
};

export default User;
