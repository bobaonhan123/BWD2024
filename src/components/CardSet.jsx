import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFolderOpen,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardSet({ data }) {
  return (
    <Link to={`${data.id}`}>
      <div
        className="w-full min-h-56 h-56 bg-white rounded-2xl
      shadow-xl shadow-[#9b9b9b17]
      px-6 pt-5 pb-2
      border-[1px]
      border-[#6c75801a]
      hover:translate-y-[-0.5rem]
      transition-all
      duration-300
      ease-in-out
      "
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-start">
            <h1 className="text-base text-left">{data.title}</h1>
            <div className="flex text-sm text-[#6C7580] mt-2">
              <p className="">{data.vocabularies.length} words</p>
              <p className="ml-4">
                <FontAwesomeIcon icon={faUsers} /> {data.members}
              </p>
            </div>
          </div>
          <div
            className="flex justify-between items-center
          text-[#6C7580]"
          >
            <p className="text-sm flex items-center">
              <img
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/456681963_527391563105988_5779884790602890748_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=gbnpLui0-HwQ7kNvgFb5BLz&_nc_ht=scontent.fdad1-3.fna&oh=03_Q7cD1QFn66Q5Z4AhXEecjxWRFHbenGGy1VQulJKSNMypLAxEZw&oe=67013A35"
                alt="avt"
                className="
              h-10 w-fit"
              />
              {data.user}
            </p>
            <FontAwesomeIcon icon={faEarthAmericas} />
          </div>
        </div>
      </div>
    </Link>
  );
}
