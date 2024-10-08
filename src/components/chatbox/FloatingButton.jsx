import { useState } from "react";
import ChatBox from "./ChatBox";
import "./FloatingButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const FloatingButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChatBox = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="floating-button-container ">
      <button className="floating-button bg-gradient-to-r from-[#4FACFE]
       to-[#00F2FE] from-21%" onClick={toggleChatBox}>
        <FontAwesomeIcon icon={faMessage} className="text-white w-6" />
      </button>
      {showChat && <ChatBox onClose={toggleChatBox} />}
    </div>
  );
};

export default FloatingButton;
