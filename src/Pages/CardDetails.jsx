import { FakeCardsSetElement } from "../Fakedata/FakeCardsSet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faFlag,
  faPen,
  faArrowUpFromBracket,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import Card from "../components/Card";

export default function CardDetails() {
  return (
    <div className="w-3/5 mx-auto pt-8">
      <div
        className="w-full p-8 bg-white rounded-2xl
      min-h-screen"
      >
        <h1
          className="text-left
          font-semibold
          text-2xl"
        >
          {FakeCardsSetElement.title}
        </h1>
        <div
          className="flex items-center mt-4
          text-[#6C7580]"
        >
          <div className="flex items-center ">
            <img
              src={FakeCardsSetElement.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm ml-2">{FakeCardsSetElement.user}</p>
          </div>
          <p className="mx-4">
            <FontAwesomeIcon icon={faFolderOpen} className="mx-1" />
            {FakeCardsSetElement.type}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <div
              className="bg-transparent text-[#6C7580]
                  px-6 py-2 rounded-lg
                  border-[1px] border-[#25252533]
                  text-xs h-9
                  cursor-pointer"
            >
              <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#4FACFE]" />
              Flashcard
            </div>
            <div
              className="bg-transparent text-[#6C7580]
                  px-6 py-2 rounded-lg
                  border-[1px] border-[#25252533]
                  text-xs h-9 ml-2
                  cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="mr-1 text-[#4FACFE]"
              />
              Practice
            </div>
          </div>

          <div className="flex text-xl">
            <div
              className="bg-transparent text-[#6C7580]
                  h-9 w-9 rounded-lg
                  border-[1px] border-[#25252533]
                  ml-1
                  flex items-center justify-center
                  cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
            <div
              className="bg-transparent text-[#6C7580]
                  h-9 w-9 rounded-lg
                  border-[1px] border-[#25252533]
                  ml-1
                  flex items-center justify-center
                  cursor-pointer"
            >
              <FontAwesomeIcon icon={faPen} className="" />
            </div>
            <div
              className="bg-transparent text-[#6C7580]
                  h-9 rounded-lg
                  ml-2
                  flex items-center justify-center
                  cursor-pointer
                  text-xl"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
        </div>
        <hr
          className="my-6 
          border-[#00000013] border-[1.5px]
          rounded-full"
        />
        {FakeCardsSetElement.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        <div
          className="px-4
          h-9 
          text-[#6C7580]
          text-xs
          rounded-md
          bg-[#F6F7FB]
          flex items-center justify-center
          w-fit
          mx-auto
          border-[#00000013] border-[1.5px]
          cursor-pointer"
        >
          Add or remove items
        </div>
      </div>
    </div>
  );
}
