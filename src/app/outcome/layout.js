import localFont from "next/font/local";
import "..//globals.css";
import StuTop from "@/components/StuTop";

export const metadata = {
  title: "Together We Are Strong",
  description: "Database Mangement Project",
};

export default function StuLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 h-screen">
          <StuTop />
          {children}
        </div>
      </body>
    </html>
  );
}
