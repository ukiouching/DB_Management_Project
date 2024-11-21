export default function SearchResultClass({ params }) {
  return (
    <>
      <div className="w-5/6 h-24 bg-white border-2 border-black rounded-lg flex items-center justify-between p-6 text-xl font-semibold">
        <div className="w-1/4 flex">
          <div>資料庫管理-</div>
          <div>孔令傑</div>
        </div>
        <div className="flex w-3/4 justify-end items-center space-x-16">
          <div className="flex flex-col items-center">
            <div>學期</div>
            <div className="text-base text-gray-700">113-1</div>
          </div>
          <div className="flex flex-col items-center">
            <div>系所</div>
            <div className="text-base text-gray-700">會計學系</div>
          </div>
          <div className="flex flex-col items-center">
            <div>學分</div>
            <div className="text-base text-gray-700">3學分</div>
          </div>
          <div className="flex flex-col items-center">
            <div>時間</div>
            <div className="text-base text-gray-700">五2, 3, 4</div>
          </div>
          <div className="flex flex-col items-center">
            <div>教室</div>
            <div className="text-base text-gray-700">管二104</div>
          </div>
          <button className="bg-gray-700 hover:bg-slate-600 text-white text-base font-medium rounded-3xl w-28">
            課程大綱
          </button>
        </div>
      </div>
    </>
  );
}
