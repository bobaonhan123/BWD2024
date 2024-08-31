import React from "react";

function RightBar() {
  return (
    <div
      className={`fixed max-w-96 w-1/5 h-screen right-0 top-0 flex flex-col items-center`}
    >
      <div className="flex flex-col items-center my-28 bg-white w-5/6 rounded-3xl">
        <h1>Bao Nhom Ho Sy</h1>
        <p className="text-sm">hosybaonhan2004@gmail.com</p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center w-1/2">
            <p>Vocabs</p>
            <h1>24</h1>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p>Level</p>
            <h1>1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
