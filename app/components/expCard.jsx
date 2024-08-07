"use client";
import Image from "next/image";
import { useState } from "react";

const ExpCard = ({ header, from, to, img, children }) => {
  const [descVisible, setDescVisibility] = useState(false);

  const expand = () => {
    /*
      Code gathered from https://stackoverflow.com/questions/4847996/css-animation-onclick at
      2024.08.07.
    */

    let arrowEl = document.getElementById("arrow");
    let cardEl = document.getElementById("card");

    let desc = String(children);

    if (!descVisible) {
      arrowEl.src = "/arrow-down.svg";
      arrowEl.classList.remove("animate-turn");
      void arrowEl.offsetWidth;
      arrowEl.classList.add("animate-turn");
  
      cardEl.classList.remove("h-[84px]");
      if (desc.length <= 143) {
        cardEl.classList.add("h-[132px]");
      } else if (desc.length > 143 && desc.length <= 286) {
        cardEl.classList.add("h-[156px]");
      } else {
        cardEl.classList.add("h-[180px]");
      }
    } else {
      arrowEl.src = "/arrow-up.svg";
      arrowEl.classList.remove("animate-turn");
      void arrowEl.offsetWidth;
      arrowEl.classList.add("animate-turn");

      if (desc.length <= 143) {
        cardEl.classList.remove("h-[132px]");
      } else if (desc.length > 143 && desc.length <= 286) {
        cardEl.classList.remove("h-[156px]");
      } else {
        cardEl.classList.remove("h-[180px]");
      }
      cardEl.classList.add("h-[84px]");
    }
  }

  return (
    <div id="card" className="m-3 h-[84px] rounded-lg bg-white transition-all duratiton-300 ease-in-out">
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
          id="arrow"
          className="m-3"
          src="/arrow-down.svg"
          width={30}
          height={30}
        />
      </div>
      {descVisible && <p className="p-3">{children}</p>}
    </div>
  );
}

export default ExpCard;
