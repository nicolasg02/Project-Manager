import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';

function Project({ id, name, repository, live }) {
  return (
    <div className="w-full flex flex-col my-5">
      <div className="flex justify-between px-5">
        <div className="flex space-x-5">
          <Link href={repository}>
            <a
              target="_blank"
              className="flex items-center space-x-1 cursor-pointer py-1 hover:text-blue-500"
            >
              <FaGithub className="h-4 w-4" />
              <span className="text-sm">Github Respository</span>
            </a>
          </Link>
          <Link href={live}>
            <a
              target="_blank"
              className="flex items-center space-x-1 cursor-pointer py-1 hover:text-blue-500"
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>

              <span className="text-sm">Live Preview</span>
            </a>
          </Link>
        </div>
        <button className="text-sm text-red-400 hover:text-red-500 flex space-x-1 items-center">
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>

          <span>Delete</span>
        </button>
      </div>
      <Link href="/project/[id]/overview" as={`/project/${id}/overview`}>
        <a
          type="submit"
          className="p-4 bg-white hover:bg-white focus:ring-gray-300 focus:ring-offset-gray-300 text-black w-full transition ease-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded flex items-center justify-between space-x-2"
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
            <span>{name}</span>
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default Project;
