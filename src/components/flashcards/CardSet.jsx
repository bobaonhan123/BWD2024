import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardSet({ title, words, views, author }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-5 flex flex-col items-start space-y-2">
      <h3 className="font-semibold text-main-text text-lg text-left break-words whitespace-normal ">
        {title}
      </h3>
      <div className="flex space-x-3">
        <p className="text-main-text">{words} words</p>
        <p className="text-main-text">
          <FontAwesomeIcon className="mr-2" icon={faEye} />
          {views} views
        </p>
      </div>
      <div className="flex items-center pt-3">
        <img
          src={author.image}
          alt="Author"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-sm text-main-text">{author.name}</span>
      </div>
    </div>
  );
}

export default CardSet;
