import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <div className=" bg-white rounded-xl text-gray-normal  px-8 flex flex-col justify-center space-y-4 basis-2/5">
      <h1 className="text-gray-main font-semibold text-center">
        <FontAwesomeIcon icon={faBell} className="mr-2" />
        Your review
      </h1>
      <p className="text-center">
        <span className="text-gray-main font-semibold text-2xl mr-3 ">4</span>
        words
      </p>
      <button className="bg-gradient-to-r
       from-[#00F2FE] from-21%
        to-[#4FACFE]
        rounded-full
        text-white
        px-4 py-2">
        Review Now <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Review;