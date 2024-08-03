import Image from "next/image";

const Socials = () => {
  return (
    <article className="flex flex-col items-center mt-4 p-8 text-center">
      <h2 className="mb-12 text-6xl font-bold">Find me</h2>
      <div className="flex justify-between w-72">
        <a href="https://github.com/matsbak">
          <Image
              src={"/github.svg"}
              alt={"Github logo"}
              width={100}
              height={100}
          />
        </a>
        <a href="https://www.linkedin.com/in/matsbakketeig">
          <Image
              src={"/linkedin.svg"}
              alt={"Linkedin logo"}
              width={100}
              height={100}
          />
        </a>
      </div>
    </article>
  );
}

export default Socials;
