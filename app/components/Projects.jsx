import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <article className="mt-4 p-8 text-center rounded-xl bg-dark-sea-green/50">
      <h2 className="mb-8 text-6xl font-bold">Projects</h2>
      <div className="flex justify-center p-3 rounded-xl bg-dark-sea-green/50">
        <ProjectCard header="Minesweeper" img="placeholder.jpg" link="https://github.com/matsbak/minesweeper">
          TBD! Classic minesweeper desktop app coded in Java
        </ProjectCard>
      </div>
    </article>
  );
}

export default Projects;
