import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Review({ data }) {
  return (
    <div className=" bg-white rounded-xl text-gray-normal px-8
    py-8 flex flex-col justify-between space-y-4 basis-2/5 shadow-md">
      <h1 className="text-gray-main font-semibold text-left
      w-full text-xl">
        <FontAwesomeIcon icon={faBell} className="mr-2" />
        Your review
      </h1>
      <p className="text-center text-sm text-gray-normal">
        <span className="text-gray-normal font-semibold text-5xl mr-3 ">{data}</span>
        words
      </p>
      <button className="bg-gradient-to-r
       from-[#00F2FE] from-21%
        to-[#4FACFE]
        rounded-full
        text-white
        px-2 py-2
        mx-10">
        Review Now <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Review;