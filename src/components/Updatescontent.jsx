import Card from "./Card";
import data from "/data.json";

const Updatescontent = () => {
  return (
    <section className="flex gap-x-14 *:h-[620px] *:w-[600px] *:text-start *:bg-[#e8f0fe] *:rounded-3xl *:overflow-hidden">
      <div>
        <Card
          title={data[0].title}
          heading={data[0].heading}
          info={data[0].info}
          dlink={data[0].d_link}
        />
        <img
          src={data[0].img}
          className="w-full h-auto object-cover"
          alt="Update"
        />
      </div>
      <div>
        <Card
          title={data[1].title}
          heading={data[1].heading}
          info={data[1].info}
          dlink={data[1].d_link}
        />
        <div className="m-10 h-full ms-auto flex pb-60">
          <img
            src={data[1].img}
            className="w-40 ms-auto"
            alt="Update"
          />
        </div>
      </div>
    </section>
  );
};

export default Updatescontent;
