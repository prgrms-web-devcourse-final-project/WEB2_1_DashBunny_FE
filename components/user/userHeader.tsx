import Image from "next/image";

const UserHeader = () => {
  const Line = "bg-gray-200 h-0.5 w-full my-5"; //라인

  return (
    <section className="w-full">
      <header>
        <div className="flex items-center">
          <Image
            src="/Icon/user.svg"
            alt="shop icon"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-3xl font-bold mx-2">고객 관리</p>
        </div>
        <p className="mt-2">
          고객 목록을 조회하고,고객의 주문 이력 및 상태를 확인할 수 있습니다.
        </p>
      </header>
      <div className={Line}></div>
    </section>
  );
};

export default UserHeader;
