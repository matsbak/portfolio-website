import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <article className="p-4 text-center bg-dark-sea-green/50">
      <h2 className="mb-4 text-6xl font-bold">Projects</h2>
      <div className="flex justify-center">
        <ProjectCard header="Project X" src="/placeholder.jpg" link="https://tailwindcss.com/docs/transition-property">Project X description</ProjectCard>
        <ProjectCard header="Project Y" src="/placeholder.jpg">Project Y description</ProjectCard>
        <ProjectCard header="Project Z" src="/placeholder.jpg">Project Z description</ProjectCard>
      </div>
    </article>
  );
}

export default Projects;
