import { useState } from 'react';

import MobileMenu from './MobileMenu';

function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <nav className="bg-gray-100 fixed inset-x-0 top-0 h-16 py-2 z-50">
      <div className="h-full flex justify-between items-center px-2">
        {/* Brand */}
        <div className="flex space-x-2 items-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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
          <span className="text-xl">Project Manager</span>
        </div>

        {/* Mobile: Menu button */}
        <div className="flex items-center">
          <button
            className="p-2"
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: Menu */}
      {toggleMobileMenu && <MobileMenu />}
    </nav>
  );
}

export default Navbar;
