import data from "../data.json";
import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Takeover = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

       let images = scrollRef.current.children;

    gsap.set(".card", { position: "absolute" });
    // gsap.set(images[1],{scaleX:1.08})

    const tl = gsap.timeline();

    tl.to("#img1", {
      scale: 1.05,
      scrollTrigger: {
        start: "+=-40px",
        trigger: scrollRef.current,
        end: "+=10px",
        scrub: true,
        // markers:true
      },
    });
    tl.to(images, {
      yPercent:400,
      scrollTrigger: {
        start: "+=-20px",
        trigger: scrollRef.current,
        end: "+=5000px",
        scrub: true,
        // markers:true
      },
    });
    tl.fromTo(
      '#img1',
      {
        clipPath: "inset(0% 0% 0% 0%)", // fully visible
      },
      {
        clipPath: "inset(0% 0% 100% 0%)", // fully erased from bottom → top
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          start: "+=6px",
          trigger: scrollRef.current,
          end: "+=150px",
          scrub: true,
        },
      }
    );

    images = images[1]
    tl.fromTo(images,
    {
      // yPercent: 2,
      clipPath: "inset(0% 0% 0% 0%)",
    },
    {
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "+=200px",
        end: "+=300px",
        scrub: true,
      },
    });
  });


  return (
    <section id="main" className="w-full flex justify-items-center my-10">
      <div
        ref={scrollRef}
        className="flex-col overflow-auto h-[1350px] justify-items-center"
      >
        <img
          id="img3"
          src={data[3].img3}
          alt="Image 3"
          className="relative card left-45  mb-0 w-280"
        />
        <img
          id="img2"
          src={data[3].img2}
          alt="Image 2"
          className="relative card left-45  mb-0 bg-white w-280"
        />{" "}
        <img
          src={data[3].img1}
          alt="Image 1"
          id="img1"
          className="left-45 card relative mb-0 w-300"
        />
      </div>
    </section>
  );
};

export default Takeover;
