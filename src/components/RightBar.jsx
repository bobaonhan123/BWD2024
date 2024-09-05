import React, { useState, useEffect } from "react";
import { getUser } from "../api/userAPI"; // Assume logoutUser is a function to handle logout
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginStore } from "../store/store";

function RightBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    vocabularies: [],
    level: 0,
  });

  const setIsLoggedIn = useLoginStore((state) => state.setIsLoggedIn);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUser();
        if (!response || !response.fullname) {
          // navigate("/login");
          setIsLoggedIn(false);
          return;
        }
        setIsLoggedIn(true);
        setInfo(response);
        console.log(response);
      } catch (error) {
        console.log(error);
        // navigate("/login");
        setIsLoggedIn(false);
      }
    }
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };
  if(isLoggedIn === false) {
    return <></>
  }

  const lowOpacity = (inp) => {
    if (location.pathname.includes(inp)) {
      return `opacity-40`;
    }
    return ``;
  }

  return (
    <div className={`fixed max-w-96 w-1/5 h-screen right-0 top-0 
    flex flex-col items-center
    ${lowOpacity("ai")}
    hover:opacity-100`}>
      <div className="flex flex-col items-center mt-28 bg-white w-5/6 rounded-3xl relative pt-10 shadow-md">
        <img
          src="https://variety.com/wp-content/uploads/2023/12/MCDAVTH_WD032.jpg"
          alt="avt"
          className="w-24 h-24 absolute rounded-full top-[-4.5rem] z-50 object-cover border-4 border-white"
        />
        <h1 className="text-[#4b5563]">{info.fullname}</h1>
        <p className="text-sm text-[#6C7580]">{info.email}</p>
        <div className="flex justify-between w-full my-4">
          <div className="flex flex-col items-center w-1/2 border border-y-0 border-l-0 border-r-[#73737355]">
            <p className="text-[#6C7580]">Vocabs</p>
            <h1 className="text-[#4b5563] font-semibold text-3xl">
              {info.vocabularies.length}
            </h1>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="text-[#6C7580]">Level</p>
            <h1 className="text-[#4b5563] font-semibold text-3xl">
              {info.level}
            </h1>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white w-full text-main-blue border border-main-blue px-4 py-2 rounded-full shadow-sm transition-transform duration-500 ease-in-out hover:bg-main-blue hover:text-white"
        >
          Log out
        </button>

      </div>
      {/* <div className="flex flex-col items-center my-6 bg-white w-5/6 rounded-3xl pt-4 shadow-lg h-[60vh]">
        <h1 className="text-[#4b5563]">Top Learners</h1>
      </div> */}
    </div>
  );
}

export default RightBar;
