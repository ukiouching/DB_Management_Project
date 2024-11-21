"use client";
import VoteNav from "./VoteNav";
import Link from "next/link";

import { useState } from "react";

export default function Voting({ params }) {
  const [selectedOptions, setSelectedOptions] = useState({
    "check-join": false,
    "check-notjoin": false,
  });

  const handleCheck = (e) => {
    const { id, checked } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };
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
            <div className="flex justify-center items-center space-x-5 w-full ">
              <div className="inline-flex items-center ">
                <label
                  className="flex items-center cursor-pointer relative"
                  htmlFor="check-join"
                >
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-600 checked:bg-gray-600 checked:border-gray-600 checked:"
                    onChange={handleCheck}
                    checked={selectedOptions["check-join"]}
                    id="check-join"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        chip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer ml-2 text-xl"
                  htmlFor="check-join"
                >
                  參加
                </label>
              </div>
              <div className="inline-flex items-center ">
                <label
                  className="flex items-center cursor-pointer relative"
                  htmlFor="check-notjoin"
                >
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-600 checked:bg-gray-600 checked:border-gray-600 checked:"
                    onChange={handleCheck}
                    checked={selectedOptions["check-notjoin"]}
                    id="check-notjoin"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        chip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="cursor-pointer ml-2 text-xl"
                  htmlFor="check-notjoin"
                >
                  不參加
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <Link
                href="/group"
                className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-gray-700 hover:bg-gray-600 text-white "
              >
                取消
              </Link>
              <Link
                href="/response"
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
