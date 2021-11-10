function Header() {
  return (
    <div className="py-16 min-h-screen">
      <div className="my-2 h-full space-y-10">
        {/* Desc + Create project */}
        <div className="flex flex-col p-2 space-y-4">
          <h2 className="text-center text-3xl">Welcome, guest.</h2>
          <button className="h-28 rounded-lg text-2xl font-thin flex flex-col items-center justify-center bg-gradient-to-b from-green-500 to-green-50 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 font-extralight"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Create new project</span>
          </button>
        </div>
        <hr className="mx-2 border border-gray-400" />
        {/* Projects list */}
        <div className="flex flex-col p-2 space-y-4">
          <h2 className="text-center text-3xl font-light pb-4">My projects</h2>
          <div className="flex flex-col justify-center space-y-2 h-28 bg-blue-500 rounded-lg px-8 py-4">
            <h2 className="text-2xl text-center">To Do App</h2>
            <hr className="border-black" />
            <div className="truncate text-md font-light">
              Descripcion de la aplicacion de ejemplo, to do app.
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-2 h-28 bg-blue-500 rounded-lg px-8 py-4">
            <h2 className="text-2xl text-center">To Do App</h2>
            <hr className="border-black" />
            <div className="truncate text-md font-light">
              Descripcion de la aplicacion de ejemplo, to do app.
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-2 h-28 bg-blue-500 rounded-lg px-8 py-4">
            <h2 className="text-2xl text-center">To Do App</h2>
            <hr className="border-black" />
            <div className="truncate text-md font-light">
              Descripcion de la aplicacion de ejemplo, to do app.
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-2 h-28 bg-blue-500 rounded-lg px-8 py-4">
            <h2 className="text-2xl text-center">To Do App</h2>
            <hr className="border-black" />
            <div className="truncate text-md font-light">
              Descripcion de la aplicacion de ejemplo, to do app.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
