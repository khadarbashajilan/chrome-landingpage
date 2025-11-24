import { PaintRoller } from "lucide-react";
import Takeover from "../components/Takeover";

const Yours_section = () => {
  return (
    <>
      <section className="relative w-full mt-20 mb-0 flex justify-items-center h-full">
        <div className="flex justify-center w-full font-sans font-bold text-6xl leading-tight">
          <h1 className="text-center">
            Make it{" "}
            <span className="inline-flex items-center bg-[#fce8e6] text-[#ea4335] font-semibold rounded-full px-6 py-0 my-2 mt-10 mx-2">
              <PaintRoller className="h-12 w-12 mr-2 text-[#ea4335] " />{" "}
              <p className="mb-4">yours</p>
            </span>{" "}
            and take <br />
            it with you
          </h1>
        </div>
      </section>
      <Takeover />
    </>
  );
};

export default Yours_section;
