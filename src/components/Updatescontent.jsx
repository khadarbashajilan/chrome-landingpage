import pic1 from "../assets/update/pic1.png";
import Card from "./Card";
import chromeLogo from "/chrome-logo.svg"; // Make sure to import your Chrome logo

const Updatescontent = () => {
  return (
    <section className="flex gap-x-14 *:h-[620px] *:w-[600px]">
      <div className=" text-start bg-[#e8f0fe] rounded-2xl overflow-hidden">
        <Card title={"UPDATES"} heading={"Automatic updates"} info={"There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser."} dlink={"Learn about automatic updates"}/>
        <img
          src={pic1}
          className="w-full h-auto object-cover"
          alt="Update illustration"
        />
      </div>
       <div className=" text-start bg-[#e8f0fe] rounded-2xl overflow-hidden">
        <Card title={"LATEST"} heading={"New from Chrome"} info={"Chrome regularly updates with tools and features that make it faster and easier to use."} dlink={"Learn what’s new on Chrome"}  />
        <div className="m-10 h-full ms-auto flex pb-60">
          <img
            src={chromeLogo}
            className="w-40 ms-auto"
            alt="Update illustration"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Updatescontent;
