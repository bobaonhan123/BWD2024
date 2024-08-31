import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CardCreateForm from "./CardCreateForm";

function FlashcardForm() {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = () => {
    setFlashcards([...flashcards, {}]); // Add an empty flashcard object
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
          <select className="w-full p-2 border-2 bg-white border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none">
            <option value="" disabled selected hidden>
              Choose collection (optional)
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button className="w-full p-2 bg-white border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none bg-blue-500 text-normal-text hover:bg-blue-600">
            <FontAwesomeIcon icon={faPlus} /> Import
          </button>
        </div>
      </div>

      {flashcards.map((flashcard, index) => (
        <CardCreateForm key={index} />
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
