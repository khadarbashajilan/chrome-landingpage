import { History } from 'lucide-react';
import Updatescontent from '../components/Updatescontent';

const Updates_section = () => {
  return (
    <section className="flex-col justify-items-center w-full text-6xl my-2 p-4 px-30 text-center">
      <div className="flex-col items-center font-sans">
        <h1 className="font-bold mb-6">
          Discover the latest
        </h1>

        <div className="flex items-center justify-center mb-10 font-bold">
          <div className="flex items-center bg-[#e8f0fe] text-[#1967D2]  rounded-full px-6 py-1 mb-4 mr-3">
            <History className="transform scale-x-[-1] h-10 w-10 mr-3" />
            <span className="mb-4 font-semibold">updates</span>
          </div>
          <p className=" mb-7 font-bold">
            from Chrome
          </p>
        </div>
      </div>
      <Updatescontent></Updatescontent>
    </section>
  );
};

export default Updates_section;
