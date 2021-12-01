import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import firebaseApp from '../../../../firebase-config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import { FaGithub, FaGlobe } from 'react-icons/fa';

import { UserContext } from '../../../../context/UserContext';
import RepoReadme from '../../../../components/overview/RepoReadme';

const firestore = getFirestore(firebaseApp);

function Overview() {
  const [projectData, setProjectData] = useState(null);
  const { globalUser } = useContext(UserContext);
  const router = useRouter();
  const { id } = router.query;

  const getRepositoryData = async (documentId) => {
    const documentRef = doc(firestore, `usuarios/${documentId}`);
    const query = await getDoc(documentRef);
    if (query.exists()) {
      const data = query.data().projects;
      data.map((project) => {
        if (project.id === id) {
          setProjectData(project);
        }
      });
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      await getRepositoryData(globalUser.email);
    };

    fetchProject();
  }, []);

  return (
    <div className="max-h-screen md:overflow-y-scroll flex-1">
      <div className="max-w-4xl mx-auto py-10 px-2 xl:px-0">
        {/* Project Name */}
        <div>
          <h1 className="text-center text-3xl sm:text-4xl py-8 bg-gray-100 text-gray-800 rounded font-bold">
            {projectData && projectData.name}
          </h1>
        </div>
        {/* Repo */}
        <div className="my-3 border border-gray-700 flex rounded bg-white cursor-default">
          <div className="bg-gray-700 text-gray-50 flex items-center space-x-2 p-2 max-w-3xl">
            <FaGithub className="h-4 w-4" />
            <p className="text-xs sm:text-sm">Github Repository</p>
          </div>
          <div className="p-2">
            <a className="text-blue-500 hover:text-blue-600 cursor-pointer text-xs sm:text-sm overflow-x-hidden flex items-center">
              {projectData && projectData.repository}
            </a>
          </div>
        </div>
        {/* Live */}
        <div className="my-3 border border-gray-700 flex rounded bg-white cursor-default">
          <div className="bg-gray-700 text-gray-50 flex items-center space-x-2 p-2 w-3xl">
            <FaGlobe className="h-4 w-4" />
            <p className="text-xs sm:text-sm">Live Preview</p>
          </div>
          <div className="p-2">
            <a className="text-blue-500 hover:text-blue-600 cursor-pointer text-xs sm:text-sm overflow-x-hidden flex items-center">
              {projectData && projectData.live}
            </a>
          </div>
        </div>

        <hr className="border-gray-400 my-16" />

        {/* README */}
        {projectData && <RepoReadme projectData={projectData} />}
      </div>
    </div>
  );
}

export default Overview;
