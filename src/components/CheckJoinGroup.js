import Link from "next/link";
import CheckJoinGroupNav from "./CheckJoinGroupNav";

export default function CheckJoinGroup({ params }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center border-l border-l-gray-400 relative">
        <CheckJoinGroupNav />
        <div className="basis-[93.5%] w-2/3 flex justify-center items-center">
          <div className="border border-gray-400 bg-slate-400 rounded-3xl flex flex-col justify-center items-center space-y-16 w-2/3 h-2/3">
            <div className="flex space-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentcolor"
                className="size-16 self-center"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="text-2xl font-bold">群組名</div>
              <div className="text-2xl font-bold">（人數）</div>
            </div>

            <div className="flex space-x-3">
              <Link
                href="/group"
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
              >
                取消
              </Link>
              <Link
                href="/group"
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
              >
                加入
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
