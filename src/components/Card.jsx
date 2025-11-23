
const Card = ({title, heading, info, dlink}) => {
  return (
        <div className="p-10 space-y-5">
        <p className="text-[14px]  text-[#5f6368]">{title}</p>
        <h1 className="font-bold text-[48px] w-full">{heading}</h1>
        <p className="text-[18px] text-[#5f6368] text-left">{info}</p>
        <a className="text-[#1967D2] text-[18px]  " href="#">{dlink}</a>
        </div>
  )
}

export default Card
