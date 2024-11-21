import localFont from "next/font/local";
import "..//globals.css";
import DeptNav from "@/components/DeptNav";

export const metadata = {
  title: "Together We Are Strong",
  description: "Database Mangement Project",
};

export default function DeptLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 min-h-screen">
          <DeptNav />
          {children}
        </div>
      </body>
    </html>
  );
}
