import UserHeader from "@/components/user/userHeader";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full p-11">
      <UserHeader />
      {children}
    </div>
  );
};

export default UserLayout;
