import ChatRoom from "@/components/ChatRoom";
import CheckPropose from "@/components/CheckPropose";

export default function CheckProposePage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <CheckPropose />
        </div>
      </div>
    </>
  );
}
