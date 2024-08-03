import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-4 p-4 rounded-t-xl text-white bg-[#2f4f4f]">
      <p>
        This project is a simple one-page portfolio website coded using React with Next.js. The
        motivation behind the project was that I thought it was natural as a developer to have a
        self-built portfolio website, and I saw it as a good opportunity to practice React.
      </p>
      <p className="mt-2">Main technologies used in this project:</p>
      <ul className="mt-2 ml-4">
        <li>
          <a className="flex w-fit hover:underline" href="https://react.dev/" target="_blank">
            <Image
              src={"/react.svg"}
              alt={"React logo"}
              width={20}
              height={20}
            />
            <p className="mx-1">React</p>
          </a>
        </li>
        <li>
          <a className="flex w-fit hover:underline" href="https://nextjs.org/" target="_blank">
            <Image
              src={"/nextjs.svg"}
              alt={"Next.js logo"}
              width={20}
              height={20}
            />
            <p className="mx-1">Next.js</p>
          </a>
        </li>
        <li className="flex">
          <a className="flex w-fit hover:underline" href="https://tailwindcss.com/" target="_blank">
            <Image
              src={"/tailwindcss.svg"}
              alt={"Tailwind CSS logo"}
              width={20}
              height={20}
            />
            <p className="mx-1">Tailwind CSS</p>
          </a>
        </li>
      </ul>
      <p className="mt-2">Created by Mats Bakketeig</p>
      <p>Version 0.1-SNAPSHOT</p>
      <div className="flex justify-between mt-2 w-[86px]">
        <a href="https://github.com/matsbak" target="_blank">
          <Image
            src={"/github.svg"}
            alt={"GitHub logo"}
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/matsbakketeig" target="_blank">
          <Image
            src={"/linkedin.svg"}
            alt={"LinkedIn logo"}
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
