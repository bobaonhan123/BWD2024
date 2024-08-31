import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardCreateForm() {
  return (
    <div className="bg-white shadow-sm mb-4">
      <div className="flex text-normal-text justify-between w-full py-3 px-6">
        <h3 className="font-semibold ">1</h3>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <hr className="mb-4 text-normal-text text-opacity-25" />
      <div className="w-full  flex space-x-4 p-4">
        <div className="w-3/4 flex space-x-5">
          <textarea
            type="text"
            placeholder="Term"
            className="w-1/2 p-2 border-b-4 border-main-blue rounded-md col-span-1 focus:border-normal-text focus:outline-none"
          />
          <textarea
            type="text"
            placeholder="Meaning"
            className="w-1/2 border-b-4 border-main-blue p-2 rounded-md col-span-1 focus:border-normal-text focus:outline-none"
          />
        </div>
        <div className="flex w-1/4 items-center justify-center">
          <button
            onClick={null}
            className="h-full w-full p-2 border border-dashed border-normal-text rounded-md text-normal-text"
          >
            <FontAwesomeIcon icon={faImage} />
            Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCreateForm;
