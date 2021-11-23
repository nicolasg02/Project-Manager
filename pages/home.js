import { useContext, useState, useEffect } from 'react';

import firebaseApp from '../firebase-config';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import fakeData from '../data/fakeData';

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
    <>
      <div className="max-w-4xl mx-auto flex flex-col space-y-4 p-2 xl:px-0">
        {/* Title */}
        <div className="text-center py-6 space-y-4">
          <h1 className="text-3xl">Welcome, guest.</h1>
          <p className="max-w-3xl mx-auto font-light font-md p-4 text-gray-700 bg-gray-100 rounded">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
        {/* Start new project */}
        <div className="flex justify-center">
          <button
            onClick={handleStartProject}
            type="submit"
            className="p-4 max-w-xl bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <span>Start New Project</span>
          </button>
        </div>
        {/* Projects List */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="my-4 text-3xl font-thin border-b border-black">
            Projects
          </h3>
          {projectsArray ? <ProjectList projectsArray={projectsArray} /> : null}
        </div>
      </div>
    </>
  );
}

export default Home;
