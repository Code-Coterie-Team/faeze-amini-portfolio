import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import HeaderMain from "@/components/headerMain";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "layout Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-screen w-screen">
        <div className="relative overflow-hidden bg-darckBg text-tGrayAll flex flex-col h-full">
          <div className="sticky">
            <Header />
          </div>
          <div className="grid grid-cols-min-one overflow-hidden">
            <Sidebar />
            <div className=" h-full overflow-hidden pb-5">
              <div className="h-full flex flex-col">
                <HeaderMain />
                {children}
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
