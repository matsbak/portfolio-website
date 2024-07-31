import Image from "next/image"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 text-9xl font-bold bg-dark-sea-green">
      <h1>Mats Bakketeig</h1>
      <Image
        className="rounded-full"
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
