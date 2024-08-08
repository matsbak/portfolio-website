import ExpCard from "./ExpCard";

const Experience = () => {
  return (
    <article className="mt-14 p-8 rounded-xl bg-dark-sea-green/50">
      <div className="text-center">
        <h2 className="text-6xl font-bold">Experience</h2>
        <p className="mt-8">Work experience as a developer.</p>
      </div>
      <div className="mt-8 p-6 max-h-80 overflow-auto rounded-xl bg-white">
        <ExpCard header="NTNU" from="August 2022" to="" img="ntnu.svg">
          I am currently studying computer science at the Norwegian University of Science and Technology (NTNU).
        </ExpCard>
      </div>
    </article>
  );
}

export default Experience;
