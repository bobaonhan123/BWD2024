import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardInfoHeader() {
  return (
    <div className="p-5 bg-white rounded-2xl w-1/2 shadow-md">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-xl font-semibold text-main-text">
          Cambridge Vocabulary for IELTS (20 units)
        </h1>
        <div className="flex items-center space-x-2 text-gray-600 text-normal-text">
          <img
            src="https://i.pinimg.com/236x/cd/cb/0c/cdcb0cb30bc700c53f12eff840156b29.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span>Bao Nhom Ho Sy</span>
          <div></div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faFolder} />
            <span>IELTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfoHeader;
