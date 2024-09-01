import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import CardSet from "../components/CardSet";

import { FakeCardsSet } from "../Fakedata/FakeCardsSet";
import { Link } from "react-router-dom";

export default function ListFlashcards() {
  console.log(FakeCardsSet);
  const [category, setCategory] = useState("my-cards");
  const handleCategoryClick = (e) => {
    setCategory(e.target.id);
  };
  return (
    <div className="w-full pt-8">
      <div className="h-11 mx-12 bg-white rounded-full flex justify-start items-center text-[#6C7580] px-10">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none px-4"
          placeholder="Find it faster with a search"
        />
      </div>
      <div
        className="w-full flex justify-between mt-8
            px-12"
      >
        <div
          className="
                flex justify-start w-2/3"
        >
          <div
            id="my-cards"
            className={`
                    cursor-pointer
                    bg-white
                    text-[#6C7580]
                    px-10
                    rounded-full
                    h-8
                    text-sm
                    border-[1px]
                    border-[#6c758056]
                    flex items-center
                    mr-2
                    ${
                      category === "my-cards"
                        ? "bg-[#E8F2FF] text-[#35509A]"
                        : ""
                    }
                    `}
            onClick={handleCategoryClick}
          >
            My cards
          </div>
          <div
            id="studying"
            className={`
                        cursor-pointer
                        bg-white
                        text-[#6C7580]
                        px-10
                        rounded-full
                        h-8
                        text-sm
                        border-[1px]
                        border-[#6c758056]
                        flex items-center
                        mr-2
                        ${
                          category === "studying"
                            ? "bg-[#E8F2FF] text-[#35509A]"
                            : ""
                        }
                    `}
            onClick={handleCategoryClick}
          >
            Studying
          </div>
          <div
            id="explore"
            className={`
                        cursor-pointer
                        bg-white
                        text-[#6C7580]
                        px-10
                        rounded-full
                        h-8
                        text-sm
                        border-[1px]
                        border-[#6c758056]
                        flex items-center
                        mr-2
                        ${
                          category === "explore"
                            ? "bg-[#E8F2FF] text-[#35509A]"
                            : ""
                        }
                    `}
            onClick={handleCategoryClick}
          >
            Explore
          </div>
        </div>
        <Link
          to="create"
          className="
                flex items-center
                justify-center
                bg-gradient-to-r from-[#00F2FE] from-21%
                to-[#4FACFE]
                text-white
                rounded-full
                px-4
                h-10
                text-base
                font-semibold
                cursor-pointer
                "
        >
          Create cards{" "}
          <span
            className="text-2xl font-extralight
                mx-1"
          >
            +
          </span>
        </Link>
      </div>
      <div
        className="
            grid
            grid-cols-3
            gap-4
            mt-8
            px-12
            "
      >
        {FakeCardsSet.map((card, index) => {
          return <CardSet key={index} data={card} />;
        })}
      </div>
    </div>
  );
}
