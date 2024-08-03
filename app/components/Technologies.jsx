import TechCard from "./TechCard";

const Technologies = () => {
  return (
    <article className="mt-4 p-8 text-center rounded-xl bg-dark-sea-green/50">
      <h2 className="mb-8 text-6xl font-bold">Technologies</h2>
      <div className="p-3 min-h-52 rounded-xl bg-dark-sea-green/50">
        <div className="flex flex-wrap">
          <TechCard img="java.svg">Java</TechCard>
          <TechCard img="spring-boot.svg">Spring Boot</TechCard>
          <TechCard img="python.svg">Python</TechCard>
          <TechCard img="html.svg">HTML</TechCard>
          <TechCard img="css.svg">CSS</TechCard>
          <TechCard img="js.svg">JavaScript</TechCard>
          <TechCard img="react.svg">React</TechCard>
          <TechCard img="nextjs.svg">Next.js</TechCard>
          <TechCard img="tailwindcss.svg">Tailwind CSS</TechCard>
        </div>
      </div>
    </article>
  );
}

export default Technologies;
