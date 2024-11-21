import NoticeHeader from "@/components/notice/NoticeHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-11">
      <NoticeHeader />
      {children}
    </div>
  );
};

export default layout;
