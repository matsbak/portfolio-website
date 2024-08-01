import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <article className="p-4 text-center rounded-xl bg-dark-sea-green/50">
      <h2 className="mb-4 text-6xl font-bold">Projects</h2>
      <div className="flex justify-center">
        <ProjectCard header="Project X" img="placeholder.jpg" link="https://tailwindcss.com/docs/transition-property">Project X description</ProjectCard>
        <ProjectCard header="Project Y" img="placeholder.jpg">Project Y description</ProjectCard>
        <ProjectCard header="Project Z" img="placeholder.jpg">Project Z description</ProjectCard>
      </div>
    </article>
  );
}

export default Projects;
