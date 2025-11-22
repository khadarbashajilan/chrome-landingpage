import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import gallery1 from "../assets/hero2/gallery1.webp";
import gallery2 from "../assets/hero2/gallery2.webp";
import gallery3 from "../assets/hero2/gallery3.webp";
import gallery4 from "../assets/hero2/gallery4.webp";
import gallery5 from "../assets/hero2/gallery5.webp";

const Gallery = () => {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to("#home1", {
        y: -200,
        x: -600,
        duration: 2,
      }).to("#home1", {
        y: -200,
        x: -900,
        duration: 2,
      }).from("#home2",{
        y: 500,
        x:0,
        duration: 2,
      }).to("#home2, #home3, #home4, #home5",{
        x:-1500,
        y:0,
        duration:2
      })

    },
  ); // Add a scope for better performance
  return (
    <>
      <div className="flex w-full overflow-visible gap-10 *:border *:rounded *:backdrop-blur-3xl *:shadow-lg">
        <img src={gallery1} id="home1" alt="" className=" border-amber-50 w-[727px] h-[444px]" />
        <img src={gallery2} id="home2" className=" border-amber-50 w-[220px] h-[444px]" />
        <img src={gallery3} id="home3" className=" border-amber-50 w-[727px] h-[444px]" />
        <img src={gallery4} id="home4"  className=" border-amber-50 w-[220px] h-[444px] " />
        <img src={gallery5} id="home5" className=" border-amber-50 w-[727px] h-[444px]" />
      </div>
    </>
  );
};

export default Gallery;
