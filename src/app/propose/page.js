import ChatRoom from "@/components/ChatRoom";
import ProposeEvent from "@/components/ProposeEvent";

export default function ProposePage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <ProposeEvent />
        </div>
      </div>
    </>
  );
}
