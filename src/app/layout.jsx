import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fnaxiom",
  description: "Internship Asssesment Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.png" />
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
