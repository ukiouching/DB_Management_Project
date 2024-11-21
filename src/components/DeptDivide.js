import { Button } from "@headlessui/react";
import DeptDivideNav from "./DeptDivideNav";
import Link from "next/link";

export default function DeptDivide({ params }) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center relative space-y-16">
        <DeptDivideNav />
        <div className="flex space-x-1 text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 self-center"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>

          <div>分配課程</div>
        </div>
        <div className="bg-slate-400 rounded-3xl flex flex-col justify-center items-center space-y-4 pt-14 pb-14 pl-20 pr-20 w-2/3 h-auto">
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">
              欲分配課號
            </div>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              placeholder=""
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">
              課程流水號
            </div>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              placeholder=""
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">
              授課教授員工編號
            </div>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              placeholder=""
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">開課學期</div>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              placeholder=""
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">總人數</div>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              placeholder=""
              type="text"
              name="search"
            />
          </div>
        </div>
        <div className="flex space-x-3 pb-20">
          <Link
            href="/dept"
            className="inline-flex w-36 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
          >
            取消
          </Link>
          <Link
            href="/finishdivide"
            className="inline-flex w-36 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
          >
            確定
          </Link>
        </div>
      </div>
    </>
  );
}
