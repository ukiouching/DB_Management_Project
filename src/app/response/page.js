import VoteResponse from "@/components/VoteResponse";
import ChatRoom from "@/components/ChatRoom";

export default function ResponsePage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <VoteResponse />
        </div>
      </div>
    </>
  );
}
