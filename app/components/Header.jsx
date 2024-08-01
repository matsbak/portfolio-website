import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center p-8 font-bold rounded-xl bg-dark-sea-green">
      <div>
        <h1 className="text-9xl">Mats Bakketeig</h1>
        <p className="m-2 text-3xl">Student developer</p>
      </div>
      <Image
        className="relative left-20 rounded-full"
        src="/portrait.jpg"
        alt="Portrait"
        width={400}
        height={400}
        priority
      />
    </header>
  );
}

export default Header;
