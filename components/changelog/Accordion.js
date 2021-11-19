import { useState } from 'react';

function Accordion() {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  return (
    <div className="border p-1 rounded w-full">
      <div
        onClick={() => setToggleAccordion(!toggleAccordion)}
        className="bg-gray-700 text-gray-100 flex items-center justify-between p-4 rounded cursor-pointer"
      >
        <h2 className="text-2xl">Version 0.0.1</h2>
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
          <p className="bg-gray-100 p-4 rounded-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
