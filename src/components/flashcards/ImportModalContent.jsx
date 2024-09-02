import { useState } from "react";
import HorizontailRadio from "../common/HorizontialRadio";
import { v4 as uuidv4 } from "uuid"; // Import uuid để tạo ID duy nhất

export const ImportModalContent=({flashcardState, closeModal})=>{
    const [flashcards,setFlashcards]=flashcardState

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

    return(
        <>
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
            <button onClick={()=>{handleImport(importText);closeModal()}} 
                className="w-full
                    py-2
                    text-white
                    mt-4
                    rounded-lg
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE]">
                Create
            </button>
        </>
    )
}
export default ImportModalContent