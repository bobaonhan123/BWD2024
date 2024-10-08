import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid"; // Import uuid để tạo ID duy nhất
import CardCreateForm from "./CardCreateForm";
import { useDisclosure } from "../../hooks/common/use-disclosure";
import Modal from "../common/Modal";
import ImportModalContent from "./ImportModalContent";
import { createFlashcardSet } from "../../api/flashcardAPI"; // Import the API service
import { generateContent } from "../../api/geminiAPI";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

function FlashcardForm() {
  const [flashcards, setFlashcards] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isOpen, open, close } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const addFlashcard = () => {
    const newFlashcard = { id: uuidv4(), term: "", meaning: "" }; // Tạo ID duy nhất
    setFlashcards([...flashcards, newFlashcard]);
  };

  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  const updateFlashcard = (id, field, value) => {
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === id ? { ...flashcard, [field]: value } : flashcard
      )
    );
  };

  const handleCreateSet = async () => {
    if (!title.trim() || !description.trim() || flashcards.length === 0) {
      toast.error('Please fill in all fields and add at least one flashcard.', {
        position: "top-right",
        autoClose: 2000,
        style: {
          color: "red",
          fontWeight: "bold",
          textAlign: "center",
        },
      });
      return;
    }

    const flashcardSet = {
      title,
      description,
      vocabularies: flashcards.map((flashcard) => ({
        word: flashcard.term,
        definition: flashcard.meaning,
        example: "", // Add example if available
        type: "", // Add type if available
        pronounce: "", // Add pronounce if available
        imageURL: "", // Add imageURL if available
        isRemember: false,
        user: { id: 1 }, // Replace with actual user ID
      })),
    };

    try {
      const response = await createFlashcardSet(flashcardSet);
      if (response.status === 201) {
        toast.success('Create flashcard set successfully!', {
          position: "top-right",
          autoClose: 2000,
          style: {
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error('Something went wrong!', {
          position: "top-right",
          autoClose: 2000,
          style: {
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          },
        });
      }

    } catch (error) {
      console.error("Error creating flashcard set:", error);
    }
  };

  const handleAiGen = async () => {
    setIsLoading(true); // Set loading to true when starting the API call
    const promt = `with topic ${title} ${description}, help me create the flashcard set include 10 word and the response must be An array of vocabulary with a similar structure to term: item.word, 
        meaning: item.definition, 
        example: item.example || "", 
        type: item.type || "",
        pronounce: item.pronounce || "", 
        isRemember: false,
        without any addition information and description, just data I need, remember I just accept json
        `;
    try {
      // Gọi API để tạo nội dung AI cho flashcards
      let aiGeneratedContent = await generateContent(promt);

      aiGeneratedContent = aiGeneratedContent
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      // Chuyển đổi chuỗi JSON thành mảng đối tượng
      const parsedContent = await JSON.parse(aiGeneratedContent);

      const generatedFlashcards = parsedContent.map((item) => ({
        id: uuidv4(), // Tạo ID duy nhất cho mỗi flashcard mới
        term: item.word, // Từ vựng từ parsedContent
        meaning: item.meaning, // Định nghĩa từ parsedContent
        example: item.example || "", // Câu ví dụ nếu có
        type: item.type || "", // Loại từ nếu có
        pronounce: item.pronounce || "", // Phiên âm nếu có
        imageURL: item.imageURL || "", // Đường dẫn ảnh nếu có
        isRemember: item.isRemember || false, // Đặt mặc định là chưa nhớ
      }));

      setFlashcards([...flashcards, ...generatedFlashcards]);
    } catch (error) {
      console.error("Error generating flashcards with AI:", error);
    } finally {
      setIsLoading(false); // Set loading to false after the API call is done
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
              onClick={handleAiGen}
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? <ClipLoader size={20} color={"#fff"} /> : <><FontAwesomeIcon icon={faCrown} /> AI Generate</>}
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
        <ImportModalContent
          flashcardState={[flashcards, setFlashcards]}
          closeModal={close}
        />
      </Modal>
    </>
  );
}

export default FlashcardForm;
