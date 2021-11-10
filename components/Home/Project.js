import { FaGithub } from 'react-icons/fa';

function Project() {
  return (
    <div className="max-w-xl w-full flex flex-col my-5">
      <div className="self-end flex space-x-5">
        <a className="flex items-center space-x-1 cursor-pointer py-1 hover:text-blue-500">
          <FaGithub className="h-4 w-4" />
          <span className="text-sm">Github Respository</span>
        </a>
        <a className="flex items-center space-x-1 cursor-pointer py-1 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="text-sm">Live Preview</span>
        </a>
      </div>
      <button
        type="submit"
        className="p-4 max-w-xl bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 focus:ring-offset-gray-300 text-black w-full transition ease-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded flex items-center justify-between space-x-2"
      >
        <div className="flex items-center space-x-2">
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
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span>To Do App</span>
        </div>
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
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>
    </div>
  );
}

export default Project;
