import Project from './Project';

function ProjectList({ projectsArray }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="my-4 text-3xl font-thin border-b border-black">
        Projects
      </h3>
      {projectsArray.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </div>
  );
}

export default ProjectList;
