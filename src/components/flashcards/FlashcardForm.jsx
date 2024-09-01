import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid"; // Import uuid để tạo ID duy nhất
import CardCreateForm from "./CardCreateForm";

function FlashcardForm() {
  const [flashcards, setFlashcards] = useState([]);

  // Hàm thêm flashcard mới với ID duy nhất
  const addFlashcard = () => {
    const newFlashcard = { id: uuidv4(), term: "", meaning: "" }; // Tạo ID duy nhất
    setFlashcards([...flashcards, newFlashcard]);
  };

  // Hàm xử lý import chuỗi với ID duy nhất
  const handleImport = (importString) => {
    const lines = importString.split("\n");
    const newFlashcards = lines.map((line) => {
      const [term, meaning] = line.split(",");
      return { id: uuidv4(), term: term.trim(), meaning: meaning.trim() }; // Tạo ID duy nhất
    });

    setFlashcards([...flashcards, ...newFlashcards]);
  };

  // Hàm xóa flashcard dựa trên ID
  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  return (
    <div className="max-w mx-auto p-4 text-main-text">
      <h1 className="text-2xl font-semibold mb-4 text-start">
        Create a new flashcard set
      </h1>
      <input
        className="w-full p-2 border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none"
        type="text"
        placeholder="Title"
      />
      <div className="flex w-full space-x-2 mb-4">
        <textarea
          className="w-2/3 p-2 border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none"
          placeholder="Add a description"
        />
        <div className="w-1/3">
          <button
            onClick={() => handleImport("term1,meaning1\nterm2,meaning2")} // Example import
            className="w-full p-2 bg-white border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none bg-blue-500 text-normal-text hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faPlus} /> Import
          </button>
          <button
            className="w-full p-2 font-semibold
             bg-gradient-to-r from-main-blue to-second-blue
             rounded-md text-white"
          >
            <FontAwesomeIcon icon={faCrown} /> AI Generate
          </button>
        </div>
      </div>

      {flashcards.map((flashcard, index) => (
        <CardCreateForm
          key={flashcard.id} // Sử dụng ID làm key
          index={index + 1} // Số thứ tự cho UI
          flashcard={flashcard}
          onDelete={removeFlashcard} // Truyền hàm xóa với ID
        />
      ))}

      <button
        onClick={addFlashcard}
        className="flex items-center bg-white justify-center w-full p-4 mt-4 border-dashed border-2 border-normal-text border-opacity-85 rounded-md"
      >
        + Create new word
      </button>
    </div>
  );
}

export default FlashcardForm;
