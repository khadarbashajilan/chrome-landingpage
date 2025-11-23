import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gallery1 from "../assets/hero2/gallery1.webp";
import gallery2 from "../assets/hero2/gallery2.webp";
import gallery3 from "../assets/hero2/gallery3.webp";
import gallery4 from "../assets/hero2/gallery4.webp";
import gallery5 from "../assets/hero2/gallery5.webp";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const images = gsap.utils.toArray(scrollRef.current?.children);
    const tl = gsap.timeline();

    tl.fromTo(
      images[0],
      {
        x: -475,
        y: -100, // More natural spacing
        // borderRadius: "10px", // Less extreme rounding
      },
      {
        x: -700,
        y: 0,
        scrollTrigger: {
          trigger: images[0],
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
          markers: false,
        },
        ease: "power2.inOut",
      }
    );

    // Animation for second image
    tl.fromTo(
      images[1],
      {
        x: -550,
        y: 500,
        // scale: 0.8
      },
      {
        x: -715,
        y: 0,
        // scale: 1.1,
        scrollTrigger: {
          trigger: images,
       start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
          markers: false,
        },
        ease: "power2.inOut",
        duration: 1.5,
      }
    );

    // Animation for third image
    tl.fromTo(
      images[2],
      {
        x: -525,
        y: 250,
      },
      {
        x: -725,
        y: 0,
        scrollTrigger: {
          trigger: images,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
          markers: false,
        },
        ease: "power2.inOut",
        duration: 1.5,
      }
    );

    // Animation for fourth image
    tl.fromTo(
      images[3],
      {
        x: -560,
        y: -100,
        scale: 1.2,
      },
      {
        x: -730,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: images,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
          markers: false,
        },
        ease: "power2.inOut",
        duration: 1.5,
      }
    );

    // Animation for fifth image
    tl.fromTo(
      images[4],
      {
        x: -525,
        y: 250,

      },
      {
        x: -730,
        y: 0,
        // opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: images,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
          markers: false,
        },
        ease: "power2.inOut",
        duration: 1.5,
      }
    );
      tl.to(scrollRef.current,
        {
          x:-350,
          scrollTrigger:{
            trigger:scrollRef.current,
            start: "top 60%",
            end: "bottom 1%",
            scrub: 1.5,
          },
        }
      )
    })

  return (
    <div className="overflow-visible overflow-x-clip py-20">
      <div
        ref={scrollRef}
        className="flex w-full  gap-10 px-10 *:border   *:backdrop-blur-2lg"
      >
        <img
          src={gallery1}
          id="home1"
          alt="Gallery image 1"
          className="border-transparent rounded-md w-[727px] h-[444px] "
        />
        <img
          src={gallery2}
          id="home2"
          alt="Gallery image 2"
          className="border-gray-300 rounded-2xl shadow-2xl border w-[220px] h-[444px] "
        />
        <img
          src={gallery3}
          id="home3"
          alt="Gallery image 3"
          className="w-[727px] border-gray-300 rounded-md h-[444px] "
        />
        <img
          src={gallery4}
          id="home4"
          alt="Gallery image 4"
          className="w-[220px] border-gray-300 shadow-2xl rounded-2xl h-[444px] "
        />
        <img
          src={gallery5}
          id="home5"
          alt="Gallery image 5"
          className="w-[727px]  border-gray-300 rounded-md h-[444px] "
        />
      </div>
    </div>
  );
};

export default Gallery;
