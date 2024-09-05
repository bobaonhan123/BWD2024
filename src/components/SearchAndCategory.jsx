import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchAndCategory({
  category,
  setCategory,
  searchText,
  setSearchText
}) {
  const [activeTab, setActiveTab] = useState(category);

  const handleCategoryClick = (e) => {
    const newCategory = e.target.id;
    setCategory(newCategory);
    setActiveTab(newCategory);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="h-11 mx-12 bg-white rounded-full flex justify-start items-center text-[#6C7580] px-10 shadow-lg">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className="w-full h-full bg-transparent outline-none px-4"
          placeholder="Find it faster with a search"
        />
      </div>
      <div className="w-full flex justify-between mt-5 px-12">
        <div className="flex justify-start w-2/3">
          {["my-cards", "studying", "explore"].map((tab) => (
            <div
              key={tab}
              id={tab}
              className={`
                cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#E8F2FF] text-[#35509A]"
                    : "bg-white text-[#6C7580]"
                }
                px-10
                rounded-full
                h-8
                text-sm
                border-[1px]
                border-[#6c758056]
                flex items-center
                mr-2
                transition-colors duration-300
              `}
              onClick={handleCategoryClick}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </div>
          ))}
        </div>
        <Link
          to="/app/flashcards/create"
          className="
            flex items-center
            justify-center
            bg-gradient-to-r from-[#00F2FE] from-21%
            to-[#4FACFE]
            text-white
            rounded-full
            px-4
            h-10
            text-base
            font-semibold
            cursor-pointer
          "
        >
          Create cards
          <span className="text-2xl font-extralight mx-1">+</span>
        </Link>
      </div>
    </div>
  );
}
