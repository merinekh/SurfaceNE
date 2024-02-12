import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Surface Nouvelle Ere Website",
  description: "Entreprise de comptoir en quartz et granite",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
