import Link from "next/link";

export default function SyllabusComponent({ params }) {
  return (
    <>
      <div className="flex flex-col w-4/5 border-2 border-black bg-white rounded-md items-center justify-between p-8 space-y-5 ml-40">
        <div className="w-1/4 flex justify-center text-2xl font-semibold">
          <div>資料庫管理-</div>
          <div>孔令傑</div>
        </div>
        <div className="w-full flex flex-col justify-start text-xl divide-y-2 divide-gray-400  divide-dashed">
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">課程概述</div>
            </div>
            <div className="text-base text-wrap">
              113-1 的課程大綱還在準備中；想瞭解這門課的同學，可以先看 112-1
              的課程大綱（在
              https://www.dropbox.com/scl/fi/m4sx4008iwz3zuxgdmgtv/DB112-1_syllabus230816.pdf?rlkey=cjyagdha7dhcfo64x9vavqayl&dl=0），請想修課的同學們務必詳閱。
              關於選課，網路選課選上的就可以修，如果沒選上想開學後加選（加簽、拿授權碼），不論是否修過「作業系統」，只要拿到授權碼都可以修（「作業系統」的先修規定只擋網路選課）：
              1.
              只要是資管系（含轉系、雙主修）且在台大有待滿兩年以上的都簽；沒待滿兩年的原則上不簽，除非能說服老師。
              2.
              開學第一週會公告作業一資訊在臺大課程網的課程大綱處，讓同學們自己評估是否具有相關能力。作業一會在開學第二週截止，會計入學期成績；請想加選的同學們自行留意台大課程網。對於在考慮要不要修這門課的同學來說，看看
              112-1
              的作業一可能有幫助：https://www.dropbox.com/scl/fi/pyr03nkkrkj8j5osraxm3/DB112-1_hw01.pdf?rlkey=409t1mp5jdquf6tbouizbsehy&dl=0。
              3.
              開學第一週課後會開放表單給學生申請授權碼，如果名額足夠就全簽。如果名額不夠要做篩選時，以作業一有完成且表現好者優先，在第二週會發放授權碼。學院、學系、年級等等資訊都會參考，但沒有一定的規則。{" "}
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">課程目標</div>
            </div>
            <div className="text-base text-wrap">待補</div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">課程要求</div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">
                預期每週課後學習時數
              </div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">Office Hours</div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">指定閱讀</div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">參考書目</div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">評量方式</div>
            </div>
            <div className="text-base text-wrap"></div>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center space-x-1">
              <svg
                className="h-6 w-6 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <div className="text-gray-700 font-semibold">課程進度</div>
            </div>
            <div className="border-2 border-gray-500 rounded-md p-5">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="border-b-2 text-gray-800">週次</th>
                    <th className="border-b-2 text-gray-800">日期</th>
                    <th className=" border-b-2 text-gray-800">單元主題</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center p-2">week 1</td>
                    <td className="text-center p-2">9/4 (三)</td>
                    <td className="text-center p-2">Introduction</td>
                  </tr>
                  <tr>
                    <td className="text-center p-2">week 1</td>
                    <td className="text-center p-2">9/4 (三)</td>
                    <td className="text-center p-2">Introduction</td>
                  </tr>
                  <tr>
                    <td className="text-center p-2">week 1</td>
                    <td className="text-center p-2">9/4 (三)</td>
                    <td className="text-center p-2">Introduction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
