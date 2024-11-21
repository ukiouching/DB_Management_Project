import { Button } from "@headlessui/react";
import { Input } from "postcss";
import ChatRoomPreview from "./ChatRoomPreview";
import ChatRoomNav from "./ChatRoomNav";

export default function ChatRoom({ params }) {
  return (
    <>
      <div className="relative flex flex-col h-full w-full">
        {/* nav */}
        <ChatRoomNav />
        {/* 聊天室預覽 */}
        <div className="overflow-auto basis-[93.5%]">
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
          <ChatRoomPreview />
        </div>
        {/* <div className="overflow-scroll w-full basis-[93.5%] flex flex-col bg-blue-200">
          <ChatRoomPreview />
          <ChatRoomPreview />
        </div> */}
      </div>
    </>
  );
}
