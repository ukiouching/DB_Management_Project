import { Button } from "@headlessui/react";
import DeptDivideNav from "./DeptDivideNav";
import Section from "./Section";
import Link from "next/link";

export default function FinishDivideSection({ params }) {
  return (
    <>
      <div className="w-full flex flex-col items-center relative space-y-16">
        <DeptDivideNav />
        <div className="flex space-x-1 text-2xl font-bold ">
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

          <div>成功分配課程：</div>
          <div>資料庫管理</div>
          <div>孔令傑</div>
        </div>
        <div className="flex space-x-1 text-lg font-semibold text-gray-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 self-center"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
          <div>課程已新增至教師主頁</div>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-center items-center w-full">
            <Section />
          </div>
        </div>
      </div>
    </>
  );
}
