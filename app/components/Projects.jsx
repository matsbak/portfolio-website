import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <article className="mt-14 p-8 rounded-xl text-center bg-dark-sea-green/50">
      <h2 className="text-6xl font-bold">Projects</h2>
      <p className="mt-8">Projects I have worked on.</p>
      <div className="flex justify-center mt-8 p-3 overflow-auto rounded-xl bg-white">
        <ProjectCard header="Minesweeper" img="placeholder.jpg" link="https://github.com/matsbak/minesweeper">
          TBD! Classic minesweeper desktop app coded in Java
        </ProjectCard>
      </div>
    </article>
  );
}

export default Projects;
