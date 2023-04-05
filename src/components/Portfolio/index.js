import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "project1",
      repo: "",
      link: "",
      description: "",
      image: "img1.png",
    },
  ];
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project=" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
