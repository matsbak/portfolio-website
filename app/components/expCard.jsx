const ExpCard = ({ children, from, to }) => {
  return (
    <a href="https://www.ntnu.edu/" target="_blank">
      <div className="rounded-lg bg-white transition-shadow duration-300 hover:shadow-md">
        <h3 className="p-3 text-3xl font-bold">{children}</h3>
        <p className="pb-3 pl-3">{<>{from} &ndash; {to}</>}</p>
      </div>
    </a>
  );
}

export default ExpCard;
