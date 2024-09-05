import { useState, useEffect } from "react";
import CardSet from "../components/CardSet";
import SearchAndCategory from "../components/SearchAndCategory";
import {
  getGlobalFlashcardSet,
  getUserFlashcardSet,
} from "../api/flashcardAPI";

export default function ListFlashcards() {
  const [category, setCategory] = useState("my-cards");
  const [flashcards, setFlashcards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pageRange = 3; // Number of page links to show

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        if (category === "explore") {
          const data = await getGlobalFlashcardSet();
          setFlashcards(data);
        } else {
          const data = await getUserFlashcardSet();
          setFlashcards(data);
        }
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [category]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = flashcards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(flashcards.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  // Adjust startPage if the endPage is less than pageRange
  const adjustedStartPage = Math.max(1, endPage - pageRange + 1);

  return (
    <div className="w-full pt-4">
      <SearchAndCategory category={category} setCategory={setCategory} />
      <div className="grid grid-cols-3 gap-4 mt-8 px-12">
        {currentItems.map((card, index) => (
          <CardSet
            key={index}
            data={card}
            type={category === "explore" ? "global" : "user"}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Previous button */}
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mx-1 rounded-lg shadow-md text-sm  transition-transform transform duration-300 hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
          >
            &laquo; Previous
          </button>
        )}
        {/* First page button */}
        {adjustedStartPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 mx-1 rounded-lg shadow-md text-sm  transition-transform transform duration-300 hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
            >
              1
            </button>
            {adjustedStartPage > 2 && (
              <span className="px-4 py-2 mx-1 rounded-lg text-sm ">...</span>
            )}
          </>
        )}
        {/* Page buttons */}
        {Array.from({ length: endPage - adjustedStartPage + 1 }, (_, index) => (
          <button
            key={index + adjustedStartPage}
            onClick={() => handlePageChange(index + adjustedStartPage)}
            className={`px-4 py-2 mx-1 rounded-lg shadow-md text-sm  transition-transform transform duration-300 hover:scale-105 ${
              currentPage === index + adjustedStartPage
                ? "bg-blue-600 text-main-blue border-blue-600 border"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
            }`}
          >
            {index + adjustedStartPage}
          </button>
        ))}
        {/* Last page button */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-4 py-2 mx-1 rounded-lg text-sm ">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-4 py-2 mx-1 rounded-lg shadow-md text-sm  transition-transform transform duration-300 hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
            >
              {totalPages}
            </button>
          </>
        )}
        {/* Next button */}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 mx-1 rounded-lg shadow-md text-sm  transition-transform transform duration-300 hover:scale-105 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}
