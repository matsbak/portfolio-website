import Image from "next/image";

const TechCard = ({ img, children }) => {
  return (
    <div
      className="flex items-center m-0.5 p-2 h-[52px] border-4 border-neutral-300 rounded-lg bg-white transition-shadow duration-300 hover:shadow-md"
    >
      <Image
          src={"/" + img}
          alt={children + " logo"}
          width={30}
          height={30}
      />
      <p className="mx-2">{children}</p>
    </div>
  );
}

export default TechCard;
