import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import data from "../data.json";
import { animation } from "../animation";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const scrollRef = useRef();
  
  useGSAP(() => {
    const images = gsap.utils.toArray(scrollRef.current?.children);
    const tl = gsap.timeline();
    animation(tl,images,scrollRef);
    })

  return (
    <div className="overflow-visible overflow-x-clip py-20">
      <div
        ref={scrollRef}
        className="flex w-full  gap-10 px-10 *:border   *:backdrop-blur-2lg"
      >
        <img
          src={data[2].img1}
          id="home1"
          alt="Gallery image 1"
          className="border-transparent rounded-md w-[727px] h-[444px] "
        />
        <img
          src={data[2].img2}
          id="home2"
          alt="Gallery image 2"
          className="border-gray-300 rounded-2xl shadow-2xl border w-[220px] h-[444px] "
        />
        <img
          src={data[2].img3}
          id="home3"
          alt="Gallery image 3"
          className="w-[727px] border-gray-300 rounded-md h-[444px] "
        />
        <img
          src={data[2].img4}
          id="home4"
          alt="Gallery image 4"
          className="w-[220px] border-gray-300 shadow-2xl rounded-2xl h-[444px] "
        />
        <img
          src={data[2].img5}
          id="home5"
          alt="Gallery image 5"
          className="w-[727px]  border-gray-300 rounded-md h-[444px] "
        />
      </div>
    </div>
  );
};

export default Gallery;
