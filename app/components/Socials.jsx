import Image from "next/image";

const Socials = () => {
  return (
    <article className="flex flex-col items-center mt-14 p-8 text-center">
      <h2 className="text-6xl font-bold">Find me</h2>
      <div className="flex justify-between mt-8 w-56">
        <a href="https://github.com/matsbak">
          <Image
              className="rounded-md transition-all duration-150 ease-in-out hover:bg-neutral-300"
              src={"/github.svg"}
              alt={"GitHub logo"}
              width={100}
              height={100}
          />
        </a>
        <a href="https://www.linkedin.com/in/matsbakketeig">
          <Image
              className="rounded-md transition-all duration-150 ease-in-out hover:bg-neutral-300"
              src={"/linkedin.svg"}
              alt={"LinkedIn logo"}
              width={100}
              height={100}
          />
        </a>
      </div>
    </article>
  );
}

export default Socials;
