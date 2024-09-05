import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid"; // Import uuid để tạo ID duy nhất
import CardCreateForm from "./CardCreateForm";
import { useDisclosure } from "../../hooks/common/use-disclosure";
import Modal from "../common/Modal";
import ImportModalContent from "./ImportModalContent";
import { createFlashcardSet } from "../../api/flashcardAPI"; // Import the API service

function FlashcardForm() {
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isOpen, open, close } = useDisclosure();

  const addFlashcard = () => {
    const newFlashcard = { id: uuidv4(), term: "", meaning: "" }; // Tạo ID duy nhất
    setFlashcards([...flashcards, newFlashcard]);
  };

  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  const updateFlashcard = (id, field, value) => {
    setFlashcards(flashcards.map(flashcard =>
      flashcard.id === id ? { ...flashcard, [field]: value } : flashcard
    ));
  };

  const handleCreateSet = async () => {
    const flashcardSet = {
      title,
      description,
      vocabularies: flashcards.map(flashcard => ({
        word: flashcard.term,
        definition: flashcard.meaning,
        example: "", // Add example if available
        type: "", // Add type if available
        pronounce: "", // Add pronounce if available
        imageURL: "", // Add imageURL if available
        isRemember: false,
        user: { id: 1 } // Replace with actual user ID
      }))
    };

    try {
      const response = await createFlashcardSet(flashcardSet);
      console.log('Flashcard set created:', response);
    } catch (error) {
      console.error('Error creating flashcard set:', error);
    }
  };

  return (
    <>
      <div className="max-w mx-auto p-4 text-main-text">
        <h1 className="text-2xl font-semibold mb-4 text-start">
          Create a new flashcard set
        </h1>
        <input
          className="w-full p-2 border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex w-full space-x-2 mb-4">
          <textarea
            className="w-2/3 p-2 border-2 border-normal-text border-opacity-30 mb-2 rounded-md focus:border-normal-text focus:outline-none"
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="w-1/3">
            <button
              onClick={open} // Example import
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
            onUpdate={updateFlashcard} // Truyền hàm cập nhật
          />
        ))}

        <div className="flex gap-4 mt-4">
          <button
            onClick={addFlashcard}
            className="flex-1 flex items-center bg-white justify-center p-4 border-dashed border-2 border-normal-text border-opacity-85 rounded-md"
          >
            + Create new word
          </button>
          <button
            onClick={handleCreateSet}
            className="flex-1 flex items-center justify-center p-4 bg-gradient-to-r from-main-blue to-second-blue text-white font-semibold rounded-md"
          >
            Create set
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={close}>
        <ImportModalContent flashcardState={[flashcards, setFlashcards]} closeModal={close} />
      </Modal>
    </>
  );
}

export default FlashcardForm;
