import LogIn from "@/components/LogIn";

export default function Start() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center space-x-2 w-3/4 ">
          <LogIn />
        </div>
      </div>
    </>
  );
}
