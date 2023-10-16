import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Header from "./components/Header";

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
      <body className={spartan.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
