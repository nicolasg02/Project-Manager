import { useRouter } from 'next/router';

import { FaGithub, FaGlobe } from 'react-icons/fa';

function Overview() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="max-h-screen md:overflow-y-scroll flex-1">
      <div className="max-w-4xl mx-auto py-10 px-2 xl:px-0">
        {/* Project Name */}
        <div>
          <h1 className="text-center text-3xl sm:text-4xl py-8 bg-gray-100 text-gray-800 rounded font-bold">
            To Do App
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
              https://github.com/nicolasg02/Project-Manager
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
              https://github.com/nicolasg02/Project-Manager
            </a>
          </div>
        </div>

        <hr className="border-gray-400 my-16" />

        {/* README */}
        <div className="flex justify-between px-2">
          <h2 className="text-3xl font-thin">README</h2>
          <button>Edit</button>
        </div>
        <div className="bg-gray-100 rounded p-10 h-screen">
          MARKOWN EDITOR HERE
        </div>
      </div>
    </div>
  );
}

export default Overview;
