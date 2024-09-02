
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Check if the click was on the backdrop and not inside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 bg-[#000] flex items-center justify-center z-50 border"
        onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-fit w-full">
    
        {children}
      </div>
    </div>
  );
};

export default Modal;
