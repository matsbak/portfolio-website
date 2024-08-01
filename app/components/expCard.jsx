import Image from "next/image";

const ExpCard = ({ children, from, to, img }) => {
  return (
    <div className="flex justify-between rounded-lg bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="flex">
        <Image
          className="ml-3"
          src={"/" + img}
          alt={children + " logo"}
          width={40}
          height={40}
        />
        <div>
          <h3 className="pt-3 pl-3 text-3xl font-bold">{children}</h3>
          <p className="pb-3 pl-3">{<>{from} &ndash; {to}</>}</p>
        </div>
      </div>
      <div className="flex">
        <Image
          className="m-3"
          src={"/arrow-down.svg"}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default ExpCard;
