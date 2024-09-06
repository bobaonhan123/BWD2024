import { Link } from "react-router-dom";
import {
  faCheck,
  faHouse,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky, faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function LeftBar() {
  let location = useLocation();

  const blue = (inp) => {
    if (location.pathname.includes(inp)) {
      return `text-[#4FACFE]`;
    }
    return ``;
  };

  const lowOpacity = (inp) => {
    if (location.pathname.includes(inp)) {
      return `opacity-40`;
    }
    return ``;
  };

  return (
    <div
      className={`fixed
        max-w-96 w-1/5 
        h-screen
        top-0
        flex
        flex-col
        items-center
        left-[1%]
        ${lowOpacity("ai")}
        hover:opacity-100
        `}>
      <div className="flex items-center">
        <Link to="/">
          <h1
            className="ml-2 mt-10 text-2xl font-semibold
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE] bg-clip-text text-transparent
                    my-6
                    ">
            take it easy
          </h1>
        </Link>
      </div>
      <div
        className="w-4/6
            bg-white
            rounded-3xl
            py-6
            h-64
            flex flex-col
            justify-evenly
            text-[#6C7580]
            shadow-md">
        <Link to="dashboard">
          <p
            className={`
          flex items-center justify-center ${blue("dashboard")}`}>
            <FontAwesomeIcon icon={faHouse} className="pr-1 mr-3" /> Dashboard
          </p>
        </Link>
        <Link to="flashcards">
          <p
            className={`
          flex items-center justify-center ${blue("flashcard")}`}>
            <FontAwesomeIcon icon={faNoteSticky} className="pr-1 mr-3" />
            Flashcards
          </p>
        </Link>
        <Link to="correction">
          <p
            className={`${blue("correction")}
          flex items-center justify-center`}>
            <FontAwesomeIcon icon={faCheck} className={`pr-1 mr-3 `} />
            Grammarly
          </p>
        </Link>
        <Link to="ai">
          <p
            className={`
          flex items-center justify-center ${blue("ai")}`}>
            <FontAwesomeIcon
              icon={faTabletScreenButton}
              className="pr-1 mr-3"
            />
            Talk with AI
          </p>
        </Link>
      </div>
      <button
        className="w-1/2
            py-2
            text-white
            mt-4
            rounded-lg
            bg-gradient-to-b from-[#4FACFE] from-21%
            to-[#00F2FE]">
        Upgrade plan
      </button>
    </div>
  );
}

export default LeftBar;
