import { getFirestore, updateDoc, doc, collection } from 'firebase/firestore';

import firebaseApp from '../../../../firebase-config';

const firestore = getFirestore(firebaseApp);

import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';

import Accordion from '../../../../components/changelog/Accordion';

function Changelog() {
  const { projectData, globalUser } = useContext(UserContext);

  // projects -> currentProject -> changelog -> copy old & add new

  const handleCreateChangelog = async (e) => {
    e.preventDefault();

    const version = e.target.versionForm.value;
    const change = e.target.textForm.value;

    const updatedProject = {
      ...projectData,
      changelog: [
        ...projectData.changelog,
        {
          id: uuid(),
          version,
          change,
        },
      ],
    };

    const projectRef = firestore
      .collection('usuarios')
      .doc(`${globalUser.email}`);

    const res = await projectRef.update(updatedProject);

    // const projectRef = doc(firestore, `usuarios/${globalUser.email}/projects`)

    // Update database w/new changelog
    // const projectRef = doc(
    //   firestore,
    //   `usuarios/${globalUser.email}/projects/${projectData.id}`
    // );

    // updateDoc(projectRef, { projectData, changelog: [...temp] });

    // Update state w/new changelog
  };

  return (
    <div className="max-h-screen md:overflow-y-scroll flex-1">
      <div className="max-w-4xl mx-auto px-2 xl:px-0 flex flex-col space-y-10">
        <h1 className="text-4xl">Changelog</h1>
        <hr className="border-gray-700" />
        <form
          onSubmit={(e) => handleCreateChangelog(e)}
          className="flex flex-col space-y-2 bg-gray-100 p-5 rounded jusitfy-around"
        >
          <h3 className="text-xl">Register</h3>
          <input
            id="versionForm"
            className="border rounded p-2"
            placeholder="Enter Version number.."
          />
          <textarea
            id="textForm"
            className="border rounded p-4"
            placeholder="Changelogs here.."
            rows="10"
          />
          <button
            type="submit"
            className="bg-green-500 px-6 py-2 rounded text-md hover:bg-green-400"
          >
            Create
          </button>
        </form>
        <hr className="border-gray-700" />
        <div className="space-y-8">
          {projectData &&
            projectData.changelog.map((change) => (
              <Accordion key={change.id} change={change} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Changelog;
