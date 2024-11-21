import { Input } from "postcss";

export default function SearchBar({ params }) {
  return (
    <>
      <label className="relative block space-y-5 w-full">
        <span className="sr-only">SearchBar</span>
        <p className="text-center font-bold text-2xl">查詢課程</p>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16 border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
          placeholder="課程名稱"
          type="text"
          name="search"
        />
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16 border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
          placeholder="課程流水號/課號"
          type="text"
          name="search"
        />
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-16 border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base"
          placeholder="系所名稱"
          type="text"
          name="search"
        />
      </label>
    </>
  );
}
