import VoteOutcome from "@/components/VoteOutcome";
import ChatRoom from "@/components/ChatRoom";

export default function OutcomePage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <VoteOutcome />
        </div>
      </div>
    </>
  );
}
