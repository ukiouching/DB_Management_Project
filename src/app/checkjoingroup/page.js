import ChatRoom from "@/components/ChatRoom";
import CheckJoinGroup from "@/components/CheckJoinGroup";

export default function CheckJoinGroupPage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <CheckJoinGroup />
        </div>
      </div>
    </>
  );
}
