import { Input } from "postcss";

export default function GroupEnter({ params }) {
  return (
    <>
      <form action="">
        <div className="w-screen">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white text-gray-400 focus:outline-none focus:border-none w-full h-16 pl-4 text-base"
            placeholder="輸入訊息"
            type="text"
          />
        </div>
      </form>
    </>
  );
}
