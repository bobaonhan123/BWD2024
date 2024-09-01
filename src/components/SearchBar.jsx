import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center py-4 space-y-4 md:space-y-0 w-full mb-6">
      <input
        type="text"
        placeholder="Find it faster with a search"
        className="shadow-sm rounded-full px-4 py-2 w-full md:w-1/2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
      />
      <nav className="flex space-x-4">
        <button className="bg-gray-100 text-main-text py-2 px-4 rounded-lg">
          My cards
        </button>
        <button className="bg-gray-100 text-main-text py-2 px-4 rounded-lg">
          Studying
        </button>
        <button className="bg-gray-100 text-main-text py-2 px-4 rounded-lg">
          Explore
        </button>
        <button className="bg-gradient-to-r from-main-blue to-second-blue text-white font-semibold py-2 px-4 rounded-full">
          Create card
          <FontAwesomeIcon className="ml-2" icon={faPlus} />
        </button>
      </nav>
    </header>
  );
}

export default SearchBar;
