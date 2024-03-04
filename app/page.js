import SlideShow from "../components/SlideShow";
import HomeMain from "../components/HomeMain";

import image1 from "../public/images/project_images/kitchenGray&Black.png";
import image2 from "../public/images/project_images/kitchen-countertop.jpg";
import image3 from "../public/images/project_images/kitchen-1.jpg";
import image4 from "../public/images/project_images/bathroom-1.jpg";
import image5 from "../public/images/project_images/living-room-white.png";
import image6 from "../public/images/project_images/kitchen-gray-2.png";

const slides = [
  {
    image: image1,
    text: "Slide 1 Description",
    buttonLink: "/link-to-slide1",
  },
  {
    image: image2,
    text: "Slide 2 Description",
    buttonLink: "/link-to-slide2",
  },
  {
    image: image3,
    text: "Slide 3 Description",
    buttonLink: "/link-to-slide3",
  },
  {
    image: image4,
    text: "Slide 2 Description",
    buttonLink: "/link-to-slide2",
  },
  {
    image: image5,
    text: "Slide 1 Description",
    buttonLink: "/link-to-slide1",
  },
  {
    image: image6,
    text: "Slide 1 Description",
    buttonLink: "/link-to-slide1",
  },
  // Add more slides as needed
];

export default function Home() {
  return (
    <>
      <SlideShow slides={slides} />
      <HomeMain />
    </>
  );
}
