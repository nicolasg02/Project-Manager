import { useState } from 'react';

function Accordion({ change }) {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  return (
    <div className="border p-1 rounded w-full">
      <div
        onClick={() => setToggleAccordion(!toggleAccordion)}
        className="bg-gray-700 text-gray-100 flex items-center justify-between p-4 rounded cursor-pointer"
      >
        <h2 className="text-2xl">Version {change.version}</h2>
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {toggleAccordion && (
        <div className="p-2">
          <p className="bg-gray-100 p-4 rounded-lg">{change.change}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
