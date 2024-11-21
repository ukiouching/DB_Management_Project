import ChatRoom from "@/components/ChatRoom";
import CreateGroup from "@/components/CreateGroup";

export default function CreateGroupPage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <CreateGroup />
        </div>
      </div>
    </>
  );
}
