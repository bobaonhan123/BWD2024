import React from "react";

function RightBar() {
    
  return (
    <div
      className={`fixed max-w-96 w-1/5 h-screen right-0 top-0 flex flex-col items-center`}
    >
      <div className="flex flex-col items-center mt-28 bg-white w-5/6 rounded-3xl
      relative
      pt-10
      shadow-2xl">
        <img src="https://variety.com/wp-content/uploads/2023/12/MCDAVTH_WD032.jpg" alt="avt" 
        className="w-24 h-24
        absolute rounded-full
        top-[-4.5rem] z-50
        object-cover
        border-4 border-white
        shadow-2xl
        "/>
        
        <h1
        className="
        text-[#4b5563]">Bao Nhom Ho Sy</h1>
        <p className="text-sm
        text-[#6C7580]">hosybaonhan2004@gmail.com</p>
        <div className="flex justify-between w-full
        my-4">
          <div className="flex flex-col items-center w-1/2
          border
          border-y-0
            border-l-0
          border-r-[#73737355]">
            <p className="
            text-[#6C7580]">Vocabs</p>
            <h1
            className="text-[#4b5563]
            font-semibold
            text-3xl">24</h1>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="
            text-[#6C7580]">Level</p>
            <h1
            className="text-[#4b5563]
            font-semibold
            text-3xl">1</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-6
      bg-white w-5/6 rounded-3xl
      pt-4
      shadow-2xl
      h-[60vh]">
        <h1 className="text-[#4b5563]">Top Learners</h1>

      </div>
    </div>
  );
}

export default RightBar;
