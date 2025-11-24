import data from "/data.json";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Takeover = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = scrollRef.current;
    const children = gsap.utils.toArray(container.children);

    children.forEach((child, index) => {
      gsap.to(child, {
        y: -100 * (index + 1),
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  });
  return (
    <section
      id="main"
      className="relative w-full flex justify-items-center h-[1200px] "
    >
      <div
        ref={scrollRef}
        className="flex-col  h-full overflow-auto justify-items-center"
      >
        <img
          id="img3"
          src={data[3].img3}
          alt="Image 3"
          className=" absolute top-10 left-45 mb-0 w-300 "
        />
        <img
          id="img2"
          src={data[3].img2}
          alt="Image 2"
          className="absolute top-10  left-45 mb-0 bg-white w-300 "
        />{" "}
        <img
          src={data[3].img1}
          alt="Image 1"
          className=" absolute top-10 left-45  mb-0 w-300 "
        />
      </div>
    </section>
  );
};

export default Takeover;
