import { useContext, useState, useEffect } from 'react';

import firebaseApp from '../firebase-config';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import fakeData from '../data/fakeData';

import Header from '../components/home/Header';
import StartNewProjectBtn from '../components/home/StartNewProjectBtn';
import ProjectList from '../components/home/ProjectList';

import { UserContext } from '../context/UserContext';

const firestore = getFirestore(firebaseApp);

function Home() {
  const [projectsArray, setprojectsArray] = useState(null);
  const { setToggleModal, globalUser } = useContext(UserContext);

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
      setprojectsArray(fetchedProjects);
    };

    fetchDocument();
  }, []);

  return (
    <div className="max-w-4xl mx-auto flex flex-col space-y-4 p-2 xl:px-0">
      <Header globalUser={globalUser} />
      <StartNewProjectBtn handleStartProject={handleStartProject} />
      {projectsArray ? <ProjectList projectsArray={projectsArray} /> : null}
    </div>
  );
}

export default Home;
