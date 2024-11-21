import localFont from "next/font/local";
import "..//globals.css";
import LogInNav from "@/components/LogInNav";
export const metadata = {
  title: "Together We Are Strong",
  description: "Database Mangement Project",
};

export default function StuLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 h-auto">
          <LogInNav />
          {children}
        </div>
      </body>
    </html>
  );
}
