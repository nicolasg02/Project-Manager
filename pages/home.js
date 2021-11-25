import { useContext, useEffect } from 'react';

import firebaseApp from '../firebase-config';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import fakeData from '../data/fakeData';

import Header from '../components/home/Header';
import StartNewProjectBtn from '../components/home/StartNewProjectBtn';
import ProjectList from '../components/home/ProjectList';

import { UserContext } from '../context/UserContext';

const firestore = getFirestore(firebaseApp);

function Home() {
  const { setToggleModal, globalUser, projectsArray, setProjectsArray } =
    useContext(UserContext);

  const searchOrCreateDocument = async (documentId) => {
    const documentRef = doc(firestore, `usuarios/${documentId}`);
    const query = await getDoc(documentRef);
    if (query.exists()) {
      const documentData = query.data();
      return documentData.projects;
    } else {
      await setDoc(documentRef, { projects: [...fakeData] });
      const query = await getDoc(documentRef);
    }
  };

  // "Start new project" button.
  const handleStartProject = () => {
    setToggleModal(true);
  };

  useEffect(() => {
    const fetchDocument = async () => {
      const fetchedProjects = await searchOrCreateDocument(globalUser.email);
      setProjectsArray(fetchedProjects);
    };

    fetchDocument();
  }, []);

  return (
    <div className="max-w-4xl mx-auto flex flex-col p-2 xl:px-0 min-h-screen">
      <Header globalUser={globalUser} />
      <StartNewProjectBtn handleStartProject={handleStartProject} />

      <hr className="border-gray-400 my-16" />

      {projectsArray ? (
        <ProjectList
          projectsArray={projectsArray}
          setProjectsArray={setProjectsArray}
          userEmail={globalUser.email}
        />
      ) : null}
    </div>
  );
}

export default Home;
