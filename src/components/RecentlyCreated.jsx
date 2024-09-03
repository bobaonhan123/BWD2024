import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RecentyCreated() {
  return (
    <div className=" bg-white rounded-xl text-gray-normal px-8
    py-8 flex flex-col justify-between space-y-4 basis-[55%]
    shadow-lg">
      <h1 className="text-gray-main font-semibold text-left
      w-full text-xl">
        Recently created
      </h1>
      
    </div>
  );
}

export default RecentyCreated;