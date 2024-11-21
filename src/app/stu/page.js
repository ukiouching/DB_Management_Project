import SearchBar from "@/components/SearchBar";
import SearchTime from "@/components/SearchTime";
import SearchDay from "@/components/SearchDay";
import SearchButton from "@/components/SearchButton";
import SearchResult from "@/components/SearchResult";
import SyllabusComponent from "@/components/SyllabusComponent";

export default function Stu() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col justify-center items-center ">
          <div className="flex justify-center space-x-2 w-3/4 ">
            <div className="basis-1/2 pt-20">
              <SearchBar />
            </div>
            <div className="flex basis-1/2 pt-40">
              <SearchDay />
              <SearchTime />
            </div>
          </div>
          <div className="flex justify-center justify-items-center mt-5">
            <SearchButton />
          </div>
        </div>
      </div>
      {/* <div className="w-full min-h-screen bg-gray-200">
        <SearchResult />
        <SyllabusComponent />
      </div> */}
    </>
  );
}
