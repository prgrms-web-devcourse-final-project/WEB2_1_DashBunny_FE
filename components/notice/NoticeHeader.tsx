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
    </section>
  );
};

export default NoticeHeader;
