import { Button } from "@headlessui/react";
import UploadSyllabusNav from "./UploadSyllabusNav";
import Link from "next/link";

export default function UploadSyllabus({ params }) {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center border-l border-l-gray-400 relative space-y-16">
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
        <div className="border border-gray-400 bg-slate-400 rounded-3xl flex flex-col justify-center items-center space-y-7 w-1/3 h-1/2">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 self-center"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>

            <div className="text-2xl font-bold text-gray-800">上傳檔案</div>
          </div>

          <div className="w-full flex items-center justify-end">
            <label className="block">
              <input
                type="file"
                className="block text-sm text-gray-700
       file:py-1 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-100 file:text-black
      hover:file:bg-gray-300
    "
              />
            </label>
          </div>

          <div className="flex space-x-3">
            <Link
              href="/prof"
              className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
            >
              取消
            </Link>
            <Link
              href="/finishupload"
              className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
            >
              確定上傳
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
