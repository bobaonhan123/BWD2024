import { useState } from 'react';
import ChatBox from './ChatBox';
import './FloatingButton.css';

const FloatingButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChatBox = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={toggleChatBox}>
        💬
      </button>
      {showChat && <ChatBox onClose={toggleChatBox} />}
    </div>
  );
};

export default FloatingButton;
