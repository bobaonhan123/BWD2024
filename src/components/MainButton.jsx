function MainButton({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-gradient-to-l from-main-start to-main-end text-white font-semibold px-6 py-2 rounded-full "
      >
        {children}
      </button>
    );
  }
  
  export default MainButton;