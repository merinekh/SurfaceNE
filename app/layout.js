import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template:
      "%s | Surfaces Nouvelle Ère - Spécialistes des Comptoirs en Quartz et Granit",
    default:
      "Surfaces Nouvelle Ère - Spécialistes des Comptoirs en Quartz et Granit",
  },
  description:
    "Découvrez notre large sélection de comptoirs de cuisine en quartz et granit pour vos espaces de vie et vos salles de bains. Experts en installation de comptoirs sur mesure pour résidences et espaces commerciaux.",
  openGraph: {
    title: {
      template:
        "%s | Surfaces Nouvelle Ère - Spécialistes des Comptoirs en Quartz et Granit",
      default:
        "Spécialistes des Comptoirs en Quartz et Granit - Surfaces Nouvelle Ère",
    },
    description:
      "Découvrez notre large sélection de comptoirs de cuisine en quartz et granit pour vos espaces de vie et vos salles de bains. Experts en installation de comptoirs sur mesure pour résidences et espaces commerciaux.",
    images: [
      "/opengraph-image.png", // L'URL de votre image ici
    ],
    locale: "fr_CA",
    type: "website",
    url: "https://surfacesnouvelleere.ca/",
    site_name:
      "Surfaces Nouvelle Ère - Spécialistes des Comptoirs en Quartz et Granit",
  },
  facebook: {
    appId: "100088187185568",
    profile: "https://www.facebook.com/profile.php?id=100088187185568",
  },
  instagram: {
    handle: "@surfacesnouvelleere",
    profile: "https://www.instagram.com/surfacesnouvelleere/?hl=fr",
  },
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
