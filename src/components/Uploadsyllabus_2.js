import { Button, Textarea } from "@headlessui/react";
import UploadSyllabusNav from "./UploadSyllabusNav";
import Link from "next/link";

export default function UploadSyllabus_2({ params }) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center relative space-y-16">
        <UploadSyllabusNav />
        <div className="flex space-x-1 text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 self-center"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <div>資料庫管理</div>
          <div>113-1</div>
        </div>
        <div className="bg-slate-400 rounded-3xl flex flex-col justify-center items-center space-y-4 pt-14 pb-14 pl-20 pr-20 w-2/3 h-auto">
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">課程概述</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>

          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">課程目標</div>
            <input
              className=" block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">課程要求</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">
              預期每週課後學習時數
            </div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">
              Office Hours
            </div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">指定閱讀</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">參考書目</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">評量方式</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
              type="text"
              name="search"
            />
          </div>
          <div className="w-full space-y-1 ">
            <div className="text-xl text-gray-700 font-semibold">課程進度</div>
            <input
              className="block bg-white w-full h-16  border-2 border-black rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
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
            href="/finishoffer"
            className="inline-flex w-36 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
          >
            確定
          </Link>
        </div>
      </div>
    </>
  );
}
