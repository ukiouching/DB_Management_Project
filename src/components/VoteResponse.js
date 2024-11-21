import ResponseNav from "./ResponseNav";
import Link from "next/link";

export default function VoteResponse({ params }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center border-l border-l-gray-400 relative">
        <ResponseNav />
        <div className="basis-[93.5%] w-2/3 flex justify-center items-center">
          <div className="border border-gray-400 bg-slate-400 rounded-3xl flex flex-col justify-evenly items-center w-2/3 h-2/3">
            <div className="text-2xl font-bold">
              <div className="flex justify-center text-center">
                <div>團名：</div>
                <div>這是團名</div>
              </div>
              <div className="flex justify-center text-center">
                <div>想揪的課：</div>
                <div>資料庫管理</div>
              </div>
              <div className="flex  justify-center text-center">
                <div>學期：</div>
                <div>113-1</div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full ">
              <div className="text-xl font-semibold">你的回覆：</div>
              <div className="text-xl font-semibold">參加</div>
            </div>

            <div className="flex space-x-3">
              <Link
                href="/group"
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
              >
                完成
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
