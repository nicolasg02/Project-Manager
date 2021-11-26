import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function StartNewProjectBtn() {
  const { handleStartProject } = useContext(UserContext);

  return (
    <div className="flex justify-center">
      <button
        onClick={handleStartProject}
        type="submit"
        className="p-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded flex items-center justify-center space-x-2"
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
  );
}

export default StartNewProjectBtn;
