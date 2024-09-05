import { useState, useEffect, useRef } from "react";
import "./ChatBox.css";

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [waitingForReply, setWaitingForReply] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "User" },
      ]);
      setMessage("");
      setWaitingForReply(true);
    }
  };

  useEffect(() => {
    if (waitingForReply) {
      const timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is an automatic reply", sender: "Receiver" },
        ]);
        setWaitingForReply(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [waitingForReply]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-close-container">
        <button className="chat-box-close" onClick={onClose}>
          ✕
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
          onClick={handleSendMessage}
          disabled={waitingForReply} 
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
