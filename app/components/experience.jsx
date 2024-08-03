import ExpCard from "./ExpCard";

const Experience = () => {
  return (
    <article className="mt-4 p-8 rounded-xl bg-dark-sea-green/50">
      <h2 className="mb-8 text-6xl text-center font-bold">Experience</h2>
      <div className="p-3 rounded-xl bg-dark-sea-green/50">
        <ExpCard header="NTNU" from="August 2022" to="" img="ntnu.svg">
          I am currently studying computer science at the Norwegian University of Science and
          Technology (NTNU).
        </ExpCard>
      </div>
    </article>
  );
}

export default Experience;
