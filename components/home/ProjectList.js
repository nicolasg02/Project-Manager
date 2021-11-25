import Project from './Project';

function ProjectList({ projectsArray }) {
  return (
    <div>
      <h2 className="text-3xl font-thin self-start">PROJECTS</h2>
      <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded">
        {projectsArray.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}

export default ProjectList;
