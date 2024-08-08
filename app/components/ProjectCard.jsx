import Image from "next/image";

const ProjectCard = ({ children, header, img, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="m-2 w-80 border-4 border-neutral-300 rounded-lg bg-white transition-shadow duration-300 hover:shadow-md">
        <h3 className="p-3 text-3xl font-bold">{header}</h3>
        <Image
          src={"/" + img}
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
