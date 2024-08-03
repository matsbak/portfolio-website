"use client";
import Image from "next/image";
import { useState } from "react";

const ExpCard = ({ header, from, to, img, children }) => {
  const [descVisible, setDescVisibility] = useState(false);

  return (
    <div className="m-3 rounded-lg bg-white">
      <div
        className="flex justify-between rounded-lg cursor-pointer transition-shadow duration-300 hover:shadow-md"
        onClick={() => setDescVisibility(!descVisible)}
      >
        <div className="flex">
          <Image
            className="ml-3"
            src={"/" + img}
            alt={children + " logo"}
            width={40}
            height={40}
          />
          <div>
            <h3 className="pt-3 pl-3 text-3xl font-bold">{header}</h3>
            <p className="pb-3 pl-3">{<>{from} &ndash; {to}</>}</p>
          </div>
        </div>
        <Image
          className="m-3"
          src={descVisible ? "/arrow-up.svg" : "/arrow-down.svg"}
          width={30}
          height={30}
        />
      </div>
      {descVisible && <p className="p-3">{children}</p>}
    </div>
  );
}

export default ExpCard;
