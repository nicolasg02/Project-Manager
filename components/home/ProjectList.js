import Project from './Project';

function ProjectList({ projectsArray }) {
  return (
    <>
      {projectsArray.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </>
  );
}

export default ProjectList;
