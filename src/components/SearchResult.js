import SearchResultClass from "./SearchResultClass";

export default function SearchResult({ params }) {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center space-y-5 pt-5 pb-5">
        <SearchResultClass />
      </div>
    </>
  );
}
