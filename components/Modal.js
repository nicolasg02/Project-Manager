function Modal() {
  return (
    <div className="absolute border border-red-500 z-50 w-full h-full max-h-screen overflow-y-scroll py-20 bg-gray-500 bg-opacity-50 px-5 md:px-0">
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="flex justify-end">
            <button>
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
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Title</label>
                  <input
                    type="text"
                    id="search-form-price"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Title for your project"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Brief Description</label>
                  <textarea
                    className="flex w-full rounded-lg border-transparent border border-gray-300 py-2 px-4"
                    placeholder="Enter a brief description"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Github repository (optional)</label>
                  <input
                    type="text"
                    id="search-form-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Repository link"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative space-y-1">
                  <label>Live (optional)</label>
                  <input
                    type="text"
                    id="search-form-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Live link"
                  />
                </div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="button"
                    className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Create
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10 rounded-lg">
          <p className="text-xs leading-5 text-gray-500">
            You can add more information and storage files in your project
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// function Modal({ setToggleModal }) {
//   return (
//     <div className="absolute z-50 h-full w-full bg-black bg-opacity-50 text-white">
//       <div className="w-full flex py-20">
//         <div className="bg-white text-black w-full p-5 py-10 rounded">
//           <div className="flex justify-end px-5 pb-5">X</div>
//           <div className="flex justify-center text-3xl font-light pb-5">
//             <h1>Start a new project</h1>
//           </div>
//           <form className="space-y-5">
//             <div className="flex flex-col space-y-1">
//               <label className="font-bold text-sm">Project Name</label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="border border-gray-500 rounded p-2"
//               />
//             </div>
//             <div className="flex flex-col space-y-1">
//               <label className="font-bold text-sm">Brief description</label>
//               <textarea
//                 className="border border-gray-500 rounded p-2"
//                 placeholder="Project description"
//               />
//             </div>
//             <div className="flex flex-col space-y-1">
//               <label className="font-bold text-sm">
//                 Github Repository (optional)
//               </label>
//               <input
//                 type="text"
//                 placeholder="Link"
//                 className="border border-gray-500 rounded p-2"
//               />
//             </div>
//             <div className="flex flex-col space-y-1">
//               <label className="font-bold text-sm">Live (optional)</label>
//               <input
//                 type="text"
//                 placeholder="Link"
//                 className="border border-gray-500 rounded p-2"
//               />
//             </div>
//             {/* Buttons */}
//             <button className="border p-2 rounded px-5 bg-green-500 text-white">
//               Create
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
