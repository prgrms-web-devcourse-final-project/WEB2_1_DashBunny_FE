import Image from "next/image";

const NoticeHeader = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <section className="w-full">
      <header>
        <div className="flex items-center">
          <Image
            src="/Icon/notice.svg"
            alt="notice image"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-3xl font-bold mx-2">공지 관리</p>
        </div>
        <p className="mt-2">
          공지 사항을 작성, 수정, 삭제할 수 있으며, 등록된 공지 사항의 목록을
          조회 할 수 있습니다.
        </p>
        <div className={Line}></div>
      </header>
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
    </section>
  );
};

export default NoticeHeader;
