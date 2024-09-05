import { useState } from "react";
import { generateContent } from "../../api/geminiAPI";
import { ClipLoader } from "react-spinners"; // Import the spinner

export default function Correction() {
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false); // State for spinner

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = async () => {
    setLoading(true); // Start loading spinner
    try {
      const res = await generateContent(
        `Correct grammar and spelling errors, recognize the text and respond only to the correct sentence in quotation marks, without saying anything else: "${input}"`
      );
      const response = res.split('"')[1];
      setContent(response);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
    setLoading(false); // Stop loading spinner
  };

  return (
    <div className="w-3/5 mx-auto pt-8 h-screen">
      <textarea
        className="w-full h-2/5 p-4 rounded-3xl shadow-lg"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <button
        onClick={handleClick}
        className="p-4 py-2 m-2 text-white rounded-full bg-gradient-to-r from-[#00F2FE] from-21% to-[#4FACFE]"
        disabled={loading} // Disable the button when loading
      >
        {loading ? (
          <ClipLoader size={24} color={"#ffffff"} /> // Show spinner when loading
        ) : (
          "Ask ChatGPT"
        )}
      </button>
      <textarea
        className="w-full h-2/5 p-4 rounded-3xl shadow-lg"
        value={content}
        readOnly
      ></textarea>
    </div>
  );
}
