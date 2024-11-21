import VoteNav from "./VoteNav";
import Link from "next/link";

export default function VoteOutcome({ params }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center border-l border-l-gray-400 relative">
        <VoteNav />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="text-xl font-semibold">揪團結果：</div>
              <div className="text-xl font-semibold">成團</div>
            </div>

            <div className="flex space-x-3">
              <Link
                href="/group"
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
              >
                確定
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
