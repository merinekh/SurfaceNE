import Image from "next/image";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import HomeMain from "../components/HomeMain";

export default function Home() {
  console.log(<HomeMain />);
  return (
    <>
      <Header />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hello
      </main> */}
      <SlideShow />
      <HomeMain />
      <>HELLO</>
    </>
  );
}
