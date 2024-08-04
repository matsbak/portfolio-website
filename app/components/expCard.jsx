"use client";
import Image from "next/image";
import { useState } from "react";

const ExpCard = ({ header, from, to, img, children }) => {
  const [descVisible, setDescVisibility] = useState(false);

  const expand = () => {
    let descEl = document.getElementById("desc");

    if (descVisible) {
      descEl.classList.remove("grid-rows-[0fr]", "opacity-0");
      descEl.classList.add("grid-rows-[1fr]", "opacity-100");
    } else {
      descEl.classList.remove("grid-rows-[1fr]", "opacity-100");
      descEl.classList.add("grid-rows-[0fr]", "opacity-0");
    }
  }

  return (
    <div className="m-3 rounded-lg bg-white">
      <div
        className="flex justify-between rounded-lg cursor-pointer transition-shadow duration-300 hover:shadow-md"
        onClick={() => {
          setDescVisibility(!descVisible);
          expand();
        }}
      >
        <div className="flex">
          <Image
            className="ml-3"
            src={"/" + img}
            alt={header + " logo"}
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
      <div
        id="desc"
        className="grid grid-rows-[0fr] opacity-0 transition-all duratiton-300 ease-in-out"
      >
        <p className="p-3 overflow-hidden">{children}</p>
      </div>
    </div>
  );
}

export default ExpCard;
