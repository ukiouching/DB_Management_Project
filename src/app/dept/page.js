import DeptCourse from "@/components/DeptCourse";
import Section from "@/components/Section";

export default function Dept() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col pt-20 pb-7">
        <div className="text-2xl font-semibold text-gray-600 p-14">
          已開設課程
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 w-full h-auto">
          <DeptCourse />
          <DeptCourse />
        </div>
        <div className="text-2xl font-semibold text-gray-600 p-14">
          已分配課程
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 w-full h-auto">
          <Section />
          <Section />
        </div>
      </div>
    </>
  );
}
