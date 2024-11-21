"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function StuTop({ params }) {
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 h-20">
        <div className="w-full flex justify-between mx-auto mt-6">
          <div className="flex font-semibold text-lg text-slate-100 h-full justify-evenly w-96 p-0 m-0">
            <Link href="/stu" className="hover:text-gray-300">
              查詢
            </Link>
            <Link href="/group" className="hover:text-gray-300">
              群組
            </Link>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div className="right-10 pr-3">
              <MenuButton className="inline-flex w-24 justify-center gap-x-1.5 rounded-3xl px-3 py-2 text-sm font-semibold  bg-blue-700 hover:bg-blue-600 text-white ">
                學生
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    個人檔案
                  </a>
                </MenuItem>

                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      登出
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>
        {/* <div className="w-full z-20 top-0 start-0 h-20"></div> */}
      </nav>
    </>
  );
}
