import { useState, useEffect, useRef } from "react";
import "./ChatBox.css";
import { generateContent } from "../../api/geminiAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFly } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [waitingForReply, setWaitingForReply] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "User" },
      ]);
      setMessage("");
      setWaitingForReply(true);

      try {
        const response = await handleAiGen(message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "Receiver" },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error generating response", sender: "Receiver" },
        ]);
      } finally {
        setWaitingForReply(false);
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAiGen = async (question) => {
    try {
      const promt = `You are an experienced English teacher with expertise in grammar, 
      vocabulary, pronunciation, and communication skills. You are skilled at explaining
       grammar rules in an understandable way and providing specific examples to illustrate 
       them. You can also help students improve their writing and speaking abilities by offering 
       detailed feedback and guidance. Answer students' questions on all aspects of English, from
        basic to advanced, with clarity, accuracy, and enthusiasm. When responding, make sure to use
         clear language, answer student short like quick respone. So, respond to this student question: ${question}.`;
      const aiGeneratedContent = await generateContent(promt);
      // console.log(aiGeneratedContent);
      return aiGeneratedContent;
    } catch (error) {
      // console.error("Error generating response with AI:", error);
      return "Error generating response";
    }
  };

  return (
    <div className="chat-box">
      <div
        className="chat-box-close-container bg-gradient-to-r from-[#4FACFE]
       to-[#00F2FE] from-21%
        ">
        <div className="chat-box-close-bot">
          <p
            className="text-white 
        text-left font-semibold
        text-xl
        w-full my-4">
            AI chat box
          </p>
        </div>
        <button className="chat-box-close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} className="text-white w-6" />
        </button>
      </div>
      <div className="chat-box-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
            {msg.text}
          </div>
        ))}
        {waitingForReply && (
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-box-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={waitingForReply}
        />
        <button
          className="bg-gradient-to-r from-[#4FACFE]
       to-[#00F2FE] from-21%"
          onClick={handleSendMessage}
          disabled={waitingForReply}>
          <FontAwesomeIcon icon={faPaperPlane} className="text-white w-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
