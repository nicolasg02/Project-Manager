import Accordion from '../../../../components/changelog/Accordion';

function Changelog() {
  return (
    <div className="max-h-screen overflow-y-scroll flex-1">
      <div className="max-w-4xl mx-auto my-10 px-2 xl:px-0 p-10 flex flex-col space-y-10">
        <h1 className="text-4xl">Changelog</h1>
        <hr className="border-gray-700" />
        <div className="flex flex-col space-y-2 bg-gray-100 p-5 rounded jusitfy-around">
          <h3 className="text-xl">Register</h3>
          <input
            className="border rounded p-2"
            placeholder="Enter Version number.."
          />
          <textarea
            className="border rounded p-4"
            placeholder="Changelogs here.."
            rows="10"
          />
          <button className="bg-green-500 px-6 py-2 rounded text-md hover:bg-green-400">
            Create
          </button>
        </div>
        <hr className="border-gray-700" />
        <div className="space-y-8">
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default Changelog;
