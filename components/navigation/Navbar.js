import { useState } from 'react';

import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <>
      <div className="bg-gray-50 text-gray-800 flex justify-between md:hidden">
        {/* Mobile: Brand */}
        <a
          href="#"
          className="flex items-center space-x-1 p-4 font-bold text-gray-700 hover:text-black"
        >
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

          <span>Project Manager</span>
        </a>
        {/* Mobile: Menu Button */}
        <button
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          className="p-4 text-gray-700 hover:text-black"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {toggleMobileMenu && <MobileMenu />}
      <Sidebar />
    </>
  );
}

export default Navbar;
