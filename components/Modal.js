import { v4 as uuid } from 'uuid';

import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import firebaseApp from '../firebase-config';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

function Modal() {
  const { setToggleModal, globalUser, projectsArray, setProjectsArray } =
    useContext(UserContext);

  const handleConfirmNewProject = async (e) => {
    e.preventDefault();

    const name = e.target.nameForm.value;
    const description = e.target.descriptionForm.value;
    const repository = e.target.repositoryForm.value;
    const live = e.target.liveForm.value;

    const updatedProjectsArray = [
      ...projectsArray,
      {
        id: uuid(),
        live,
        name,
        repository,
        overview: {
          description,
          readme: {},
        },
        changelog: {},
        assets: {},
        stack: {},
        todo: {},
      },
    ];

    // update firebase
    const documentRef = doc(firestore, `usuarios/${globalUser.email}`);
    updateDoc(documentRef, { projects: [...updatedProjectsArray] });

    // update state
    setProjectsArray(updatedProjectsArray);
  };

  return (
    <div className="absolute border border-red-500 z-50 w-full h-full max-h-screen overflow-y-scroll py-20 bg-gray-500 bg-opacity-50 px-5 md:px-0">
      <div className="bg-white rounded shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="flex justify-end">
            {/* Close button */}
            <button onClick={() => setToggleModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white">
                Start new project
              </span>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={(e) => handleConfirmNewProject(e)} className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Title</label>
                  <input
                    type="text"
                    id="nameForm"
                    className=" rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Title for your project"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Brief Description</label>
                  <textarea
                    id="descriptionForm"
                    className="flex w-full rounded border-transparent border border-gray-300 py-2 px-4"
                    placeholder="Enter a brief description"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Github repository (Required)</label>
                  <input
                    type="text"
                    id="repositoryForm"
                    className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Repository link"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Live (optional)</label>
                  <input
                    type="text"
                    id="liveForm"
                    className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Live link"
                  />
                </div>
              </div>
              <div>
                <span className="block w-full rounded shadow-sm">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded"
                  >
                    Create
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10 rounded">
          <p className="text-xs leading-5 text-gray-500">
            You can add more information and store files in your project
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
