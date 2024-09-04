import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`fixed
        z-50
        top-0
        left-0
        h-20
        w-full
        bg-transparent
        backdrop-blur-md
        
        `}
    >
      <div
        className="flex
        items-center
        justify-between
        h-full
        px-4
        mx-auto
        max-w-7xl"
      >
        <div className="flex items-center">
          <Link to="/">
            <h1
              className="ml-2 text-xl font-semibold
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE] bg-clip-text text-transparent"
            >
              take it easy
            </h1>
          </Link>
        </div>
        <div
          className="text-xl hidden
                    max-lg:block
                    absolute right-4
                    text-[#6C7580]"
          onClick={handleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav
          className={`flex items-center 
                max-lg:flex-col
                max-lg:absolute
                max-lg:top-0
                max-lg:right-0
                max-lg:bg-white
                max-lg:w-4/5
                max-lg:h-screen
                max-lg:pt-20
                max-lg:transition-transform
                max-lg:duration-500
                max-lg:ease-in-out
                    ${
                      showMenu
                        ? "max-lg:transform translate-x-0"
                        : "max-lg:transform max-lg:translate-x-full"
                    }
                `}
        >
          <div
            className="absolute top-6 right-6 text-3xl text-[#6C7580] hidden
                    max-lg:block"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <Link
            to="/pricing"
            className="ml-8 text-base text-[#6C7580] max-lg:text-lg max-lg:ml-2 max-lg:my-2"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="ml-8 text-base text-[#6C7580] max-lg:text-lg max-lg:ml-2 max-lg:my-2"
          >
            About us
          </Link>
          <Link
            to="/login"
            className="ml-8 text-base text-[#6C7580] max-lg:text-lg max-lg:ml-2 max-lg:my-2"
          >
            Login
          </Link>
          <Link
            to="/app"
            className="ml-8 text-base h-10 
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE]
                    px-6
                    flex items-center rounded-full
                    max-lg:mx-2
                    max-lg:w-4/5
                    max-lg:text-xl
                    max-lg:flex-col
                    max-lg:justify-center
                    "
          >
            <p className="text-white font-semibold text-center">Get Started</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
