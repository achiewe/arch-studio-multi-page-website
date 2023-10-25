import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Providers } from "@/features/Provider";
import Header from "./components/Header/Header";
import BurgerMenu from "./components/Header/BurgerMenu";
import Footer from "./components/Footer/Footer";

const spartan = League_Spartan({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "arch studio multi page",
  description:
    "Explore stunning architectural designs and interior trends with Arch Studio. Your source for creative inspiration in architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={spartan.className}>
          <Header />

          <div className="w-full min-h-screen bg-[#000000] opacity-50 absolute"></div>
          <BurgerMenu />
          {children}

          <Footer />
        </body>
      </Providers>
    </html>
  );
}
