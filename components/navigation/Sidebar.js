import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAuth, signOut } from '@firebase/auth';
import firebaseApp from '../../firebase-config';

import { UserContext } from '../../context/UserContext';

const auth = getAuth(firebaseApp);

function Sidebar() {
  const [projectView, setProjectView] = useState(false);
  const { handleStartProject } = useContext(UserContext);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    router.pathname !== '/' ? setProjectView(true) : setProjectView(false);
  }, [router.pathname]);

  return (
    <>
      <div className="bg-gray-50 text-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* Brand */}
        <Link href="/">
          <a href="#" className="flex items-center space-x-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            <span className="text-xl font-extrabold">Project Manager</span>
          </a>
        </Link>
        {/* nav */}
        <nav className="space-y-3">
          {projectView ? (
            <>
              <Link href="/">
                <a className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded transition ease-out duration-200 hover:bg-gray-200 hover:text-black">
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
                      strokeWidth="2"
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  </svg>

                  <span>My Projects</span>
                </a>
              </Link>
              {/* Overview */}
              <Link
                href="/project/[id]/overview"
                as={`/project/${id}/overview`}
              >
                <a
                  className={`bg-gray-100 flex space-x-2 py-2.5 px-4 rounded transition ease-out duration-200 hover:bg-gray-200 hover:text-black ${
                    router.pathname === '/project/[id]/overview' &&
                    'bg-gray-200'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <span>Overview</span>
                </a>
              </Link>
              {/* Changelog */}
              <Link
                href="/project/[id]/changelog"
                as={`/project/${id}/changelog`}
              >
                <a
                  className={`bg-gray-100 flex space-x-2 py-2.5 px-4 rounded transition ease-out duration-200 hover:bg-gray-200 hover:text-black ${
                    router.pathname === '/project/[id]/changelog' &&
                    'bg-gray-200'
                  }`}
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>

                  <span>Changelog</span>
                </a>
              </Link>
              <a
                href={null}
                className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded text-gray-400 transition ease-out duration-200 cursor-not-allowed"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span>Team</span>
              </a>
              <a
                href="#"
                className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded text-gray-400 transition ease-out duration-200 cursor-not-allowed"
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>

                <span>Stack</span>
              </a>
              <a
                href="#"
                className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded text-gray-400 transition ease-out duration-200 cursor-not-allowed"
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>

                <span>Assets</span>
              </a>
              <a
                href="#"
                className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded text-gray-400 transition ease-out duration-200 cursor-not-allowed"
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>To Do</span>
              </a>
            </>
          ) : (
            <>
              <button
                onClick={handleStartProject}
                className="bg-gray-100 flex space-x-2 py-2.5 px-4 rounded transition ease-out duration-200 hover:bg-gray-200 hover:text-black w-full"
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

                <span>Start new project</span>
              </button>
            </>
          )}
          <button
            onClick={() => signOut(auth)}
            className="bg-red-100 flex w-full space-x-2 py-2.5 px-4 rounded transition ease-out duration-200 hover:bg-red-300 hover:text-black"
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span>Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
