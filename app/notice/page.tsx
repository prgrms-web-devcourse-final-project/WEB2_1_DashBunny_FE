import Image from "next/image";
import Link from "next/link";

const Notice = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <>
      <div className="flex">
        <select className="border rounded-xl text-gray-500 p-2 w-48 shadow">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
        </select>

        <div className="ml-2 flex border p-2 w-full items-center border-gray-300 rounded-xl shadow">
          <Image
            src="/Icon/search.svg"
            alt="search icon"
            width={25}
            height={25}
          />
          <input
            placeholder="위치, 가게 이름으로 검색하세요."
            className="outline-none mx-2 w-1/2"
          />
        </div>
      </div>
      <div className={Line}></div>

      <section>
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl ">전체 공지</p>
          <p className="font-semibold text-2xl mx-3 text-BunnyOrange"> {11}</p>
          <Link href="/notice/write" className="ml-auto">
            <button className="border shadow w-40 p-2 rounded-xl font-semibold hover:bg-BunnyOrange transition-color transform duration-300 ease-in-out">
              공지 작성하기
            </button>
          </Link>
        </div>
        <div className="bg-slate-100 w-full h-8 border-b-2 border-gray-500"></div>
        <main className="w-full h-[68vh] border-b-4">
          {/* 데이터가 들어올 곳 */}
        </main>
      </section>
    </>
  );
};

export default Notice;
