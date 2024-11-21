import localFont from "next/font/local";
import "..//globals.css";
import ProfNav from "@/components/ProfNav";

export const metadata = {
  title: "Together We Are Strong",
  description: "Database Mangement Project",
};

export default function ProfLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 min-h-screen">
          <ProfNav />
          {children}
        </div>
      </body>
    </html>
  );
}
