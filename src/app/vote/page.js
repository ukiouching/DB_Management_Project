import VoteNav from "@/components/VoteNav";
import Voting from "@/components/Voting";
import ChatRoom from "@/components/ChatRoom";

export default function VotePage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <Voting />
        </div>
      </div>
    </>
  );
}
