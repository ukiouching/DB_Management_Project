import { Input } from "postcss";
import ChatNav from "./ChatNav";
import LeftMessageHead from "./LeftMessageHead";
import LeftMessage from "./LeftMessage";
import RightMessageHead from "./RightMessageHead";
import RightMessage from "./RightMessage";
import EventMessage from "./EventMessage";

export default function Chat({ params }) {
  return (
    <>
      <div className="w-full h-full flex flex-col border-l border-l-gray-400 relative">
        <ChatNav />
        <div className="overflow-y-scroll basis-[85.5%] pt-1 pb-1">
          <LeftMessageHead />
          <LeftMessage />
          <RightMessageHead />
          <RightMessage />
          <EventMessage />
        </div>

        <div className="basis-[8%] border-t border-t-gray-400 ">
          <input
            className="placeholder:italic placeholder:text-slate-400bg-white bg-gray-200 focus:outline-none focus:border-none w-full h-full text-base pl-4"
            placeholder="輸入訊息"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
