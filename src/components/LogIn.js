import { Button } from "@headlessui/react";
import Link from "next/link";

export default function LogIn({ params }) {
  return (
    <>
      <div className="bg-slate-400 rounded-3xl flex flex-col w-2/5 h-96 justify-evenly items-center">
        <div className="flex space-x-1">
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

          <div className="text-2xl font-bold">登入/註冊</div>
        </div>

        <div className="w-2/3">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full  py-2 pl-9 pr-3 shadow-sm text-base"
            placeholder="學號/員工編號/系所編號"
            type="text"
            name="search"
          />
        </div>
        <div className="w-2/3">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full  py-2 pl-9 pr-3 shadow-sm text-base"
            placeholder="密碼"
            type="text"
            name="search"
          />
        </div>

        <div className="flex space-x-3">
          <button className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white ">
            取消
          </button>
          <button className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white ">
            確定
          </button>
        </div>
      </div>
    </>
  );
}
