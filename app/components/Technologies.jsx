import TechCard from "./TechCard";

const Technologies = () => {
  return (
    <article className="mt-14 p-8 rounded-xl text-center bg-dark-sea-green/50">
      <h2 className="text-6xl font-bold">Technologies</h2>
      <p className="mt-8">Technologies I am familiar with.</p>
      <div className="mt-8 p-6 min-h-64 rounded-xl bg-white">
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
