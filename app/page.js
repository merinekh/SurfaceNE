import Image from "next/image";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import HomeMain from "../components/HomeMain";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SlideShow />
      <HomeMain />
      <Footer />
    </>
  );
}
