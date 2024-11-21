import Chat from "@/components/Chat";
import ChatRoom from "@/components/ChatRoom";
import ProposeEvent from "@/components/ProposeEvent";
import CheckPropose from "@/components/CheckPropose";
import VoteResponse from "@/components/VoteResponse";
import VoteOutcome from "@/components/VoteOutcome";
import Voting from "@/components/Voting";
import CreateGroup from "@/components/CreateGroup";
import VertificationCode from "@/components/VerificationCode";
import JoinGroup from "@/components/JoinGroup";
import CheckJoinGroup from "@/components/CheckJoinGroup";

export default function GroupPage() {
  return (
    <>
      <div className="pt-20 h-screen flex">
        <div className="w-1/4">
          <ChatRoom />
        </div>
        <div className="w-3/4 ">
          <Chat />
        </div>
      </div>
    </>
  );
}
