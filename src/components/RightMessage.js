export default function RightMessage({ params }) {
  return (
    <>
      <div className="flex items-center justify-end">
        <div className=" self-end pl-1 ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </button>
        </div>
        <div className="rounded-xl bg-gray-400 text-sm p-2 pt-1 pb-1 w-auto max-w-screen-md mb-1 mr-11">
          今天星期天，昨天星期六，兩天天氣都很好。
        </div>
      </div>
    </>
  );
}
