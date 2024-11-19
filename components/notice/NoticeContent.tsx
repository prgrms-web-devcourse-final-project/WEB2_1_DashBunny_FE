const NoticeContent = () => {
  return (
    <section>
      <div className="flex items-center mb-5">
        <p className="font-semibold text-2xl ">전체 공지</p>
        <p className="font-semibold text-2xl mx-3 text-BunnyOrange"> {11}</p>
      </div>
      <div className="bg-slate-100 w-full h-8 border-b-2 border-gray-500"></div>
      <main className="w-full h-[68vh] border-b-4">
        {/* 데이터가 들어올 곳 */}
      </main>
    </section>
  );
};

export default NoticeContent;
