import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import firebaseApp from '../../firebase-config';

import Project from './Project';

const firestore = getFirestore(firebaseApp);

function ProjectList({ projectsArray, setProjectsArray, userEmail }) {
  const handleDeleteProject = async (projectId) => {
    const filteredProjects = projectsArray.filter(
      (project) => project.id !== projectId
    );

    // update firebase
    const documentRef = doc(firestore, `usuarios/${userEmail}`);
    updateDoc(documentRef, { projects: [...filteredProjects] });

    // update state
    setProjectsArray(filteredProjects);
  };

  return (
    <div>
      <h2 className="text-3xl font-thin self-start">PROJECTS</h2>
      <div className="flex flex-col items-center justify-center md:p-10 bg-gray-50 rounded">
        {projectsArray.map((project) => {
          return (
            <Project
              key={project.id}
              handleDeleteProject={handleDeleteProject}
              {...project}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
