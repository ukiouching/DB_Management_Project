import ChatRoom from "@/components/ChatRoom";
import VertificationCode from "@/components/VerificationCode";

export default function CreateGroupPage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <VertificationCode />
        </div>
      </div>
    </>
  );
}
