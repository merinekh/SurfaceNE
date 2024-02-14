"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header path={pathName} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
