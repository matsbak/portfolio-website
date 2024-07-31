import Image from "next/image";

const ProjectCard = ({ children, header, src, link }) => {
  return (
    <a href={link}>
      <div className="m-2 w-80 rounded-lg bg-white transition-shadow duration-300 hover:shadow-2xl">
        <h3 className="p-3 text-3xl font-bold">{header}</h3>
        <Image
          src={src}
          alt="Project image"
          width={320}
          height={320}
        />
        <p className="p-3">{children}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
