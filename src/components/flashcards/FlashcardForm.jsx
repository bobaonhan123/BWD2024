import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid"; // Import uuid để tạo ID duy nhất
import CardCreateForm from "./CardCreateForm";
import { useDisclosure } from "../../hooks/common/use-disclosure";
import Modal from "../common/Modal";
import HorizontailRadio from "../common/HorizontialRadio";

function FlashcardForm() {
  const [flashcards, setFlashcards] = useState([]);
  const {isOpen, open, close }=useDisclosure()

  const [importText, setImportText]=useState('')

  const [termDelimiter, setTermDelimiter] = useState('\t');
  const [customTermDelimiter,setCustomTermDelimiter]=useState('')
  const [cardDelimiter, setCardDelimiter] = useState('\n');
  const [customCardDelimiter,setCustomCardDelimiter]=useState('')

  const handleTermDelimiterRadioChange = (event) => {
    setTermDelimiter(event.target.value);
  };

  const handleCardDelimiterRadioChange = (event) => {
    setCardDelimiter(event.target.value);
  };

  const term_delimiter_options = [
    { value: '\t', label: 'Tab' },
    { value: ',', label: 'Comma' },
    { value: customTermDelimiter, label: 
    <input
      type="text"
      maxLength={1}
      className="ml-2 p-1 border border-gray-300 rounded-lg w-12 px-3"
      value={customTermDelimiter}
      onChange={(e)=>{setCustomTermDelimiter(e.target.value)}}
    /> },
  ];

  const card_delimiter_options = [
    { value: '\n', label: 'New line' },
    { value: ';', label: 'Semicolon' },
    { value: customCardDelimiter, label: 
    <input
      type="text"
      maxLength={1}
      className="ml-2 p-1 border border-gray-300 rounded-lg w-12 px-3"
      value={customCardDelimiter}
      onChange={(e)=>{setCustomCardDelimiter(e.target.value)}}
    />},
  ];


  // Hàm thêm flashcard mới với ID duy nhất
  const addFlashcard = () => {
    const newFlashcard = { id: uuidv4(), term: "", meaning: "" }; // Tạo ID duy nhất
    setFlashcards([...flashcards, newFlashcard]);
  };

  // Hàm xử lý import chuỗi với ID duy nhất
  const handleImport = (importString) => {
    if(!termDelimiter||!cardDelimiter) return
    const lines = importString.split(cardDelimiter);
    console.log(lines)
    const newFlashcards = lines.map((line) => {
      const [term, meaning] = line.split(termDelimiter);
      console.log("term",term)
      console.log("meaning",meaning)
      return { id: uuidv4(), term: term?.trim(), meaning: meaning?.trim() }; // Tạo ID duy nhất
    });

    setFlashcards([...flashcards, ...newFlashcards]);
  };

  // Hàm xóa flashcard dựa trên ID
  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  return (<>
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
        />
      ))}

      <button
        onClick={addFlashcard}
        className="flex items-center bg-white justify-center w-full p-4 mt-4 border-dashed border-2 border-normal-text border-opacity-85 rounded-md"
      >
        + Create new word
      </button>
    </div>
    <Modal isOpen={isOpen} onClose={close}>

      <div className="mb-4">
        <h2 className="text-lg text-left font-semibold text-gray-900">Import</h2>
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded-lg mt-2"
          placeholder="Word 1\tDefinition 1\nWord 2\tDefinition 2\nWord 3\tDefinition 3"
          value={importText} onChange={e => setImportText(e.target.value)}
          onKeyDown={(e)=>{
            //allow to input 'tab'
            if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            setImportText(importText.slice(0, start) + '\t' + importText.slice(end));
            e.target.selectionStart = e.target.selectionEnd = start + 1;
          }}}
        />
      </div>
    
      <div className="flex gap-3">
        <div>
          <h3 className="text-sm text-left font-medium text-gray-800">Between Term and Definition</h3>
          <div className="flex items-center space-x-4 mt-2">
            <HorizontailRadio options={term_delimiter_options} onChange={handleTermDelimiterRadioChange} selectedValue={termDelimiter}/>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-800 text-left">Between cards</h3>
          <div className="flex items-center space-x-4 mt-2">
            <HorizontailRadio options={card_delimiter_options} onChange={handleCardDelimiterRadioChange} selectedValue={cardDelimiter}/>
          </div>
        </div>
      </div>
      <button onClick={()=>{handleImport(importText);close()}} 
        className="w-full
            py-2
            text-white
            mt-4
            rounded-lg
            bg-gradient-to-b from-[#4FACFE] from-21%
            to-[#00F2FE]">
        Create
      </button>
    </Modal>
  </>
  );
}

export default FlashcardForm;
