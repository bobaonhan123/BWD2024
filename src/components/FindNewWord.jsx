import { useState } from "react";
import { faLanguage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
// import DictionaryResult from "./DictionaryResult";

function FindNewWord() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuerry] = useState("");

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-6 rounded-xl w-auto shadow-sm">
      <h1 className="text-gray-main font-semibold pb-4 flex text-lg items-center">
        <FontAwesomeIcon icon={faLanguage} className="mr-2" />
        Explore new words
      </h1>
      <div className="bg-background rounded-full pl-4 mb-2 flex items-center">
        <input
          type="text"
          placeholder="Hello, Xin chao, ..."
          className="bg-transparent focus:outline-none flex-grow"
          onChange={(e) => {
            setIsExpanded(false);
            setQuerry(e.target.value);
          }}
        />
        <select
          name="languages"
          id="languages"
          className="py-1 px-2 rounded-full mr-2 bg-white text-gray-normal focus:outline-none"
        >
          <option value="eng-vie">eng - vie</option>
          <option value="vie-eng">vie - eng</option>
        </select>
        <MainButton onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </MainButton>
      </div>
      {isExpanded && <DictionaryResult query={query} />}
    </div>
  );
}

export default FindNewWord;