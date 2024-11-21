import Link from "next/link";

export default function DeptCourse({ params }) {
  return (
    <>
      <div className="w-5/6 h-24 bg-white border-2 border-black rounded-lg flex items-center justify-between p-6 text-xl font-semibold">
        <div className="w-1/4 flex">
          <div>資料庫管理</div>
        </div>
        <div className="flex justify-end items-center space-x-16">
          <div className="flex flex-col items-center">
            <div>課號</div>
            <div className="text-base text-gray-700">IM3008</div>
          </div>
          <div className="flex flex-col items-center">
            <div>起始學期</div>
            <div className="text-base text-gray-700">112-2</div>
          </div>
          <div className="flex flex-col items-center">
            <div>學分</div>
            <div className="text-base text-gray-700">3學分</div>
          </div>
          <div className="flex flex-col items-center">
            <div>必/選修</div>
            <div className="text-base text-gray-700">選修</div>
          </div>
        </div>
      </div>
    </>
  );
}
