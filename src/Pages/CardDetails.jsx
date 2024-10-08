import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faPen,
  faArrowUpFromBracket,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";
import SearchAndCategory from "../components/SearchAndCategory";
import { getDetailCardSet } from "../api/flashcardAPI";
import Card from "../components/Card";

export default function CardDetails() {
  const { id } = useParams(); // Lấy ID từ URL
  const [cardSetDetails, setCardSetDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDetailCardSet(id);
        setCardSetDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading flashcard details.</div>;
  }

  return (
    <div className="w-3/5 mx-auto pt-8">
      <SearchAndCategory />
      <div className="w-full mt-8 p-8 bg-white rounded-2xl min-h-screen">
        {/* Hiển thị tiêu đề và mô tả của bộ flashcard */}
        <h1 className="text-left font-semibold text-2xl">
          {cardSetDetails.title}
        </h1>
        <p className="text-left mt-2 text-[#6C7580]">
          {cardSetDetails.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <Link to="flashcard-learning">
              <div
                className="bg-transparent text-[#6C7580] px-6 py-2 rounded-lg
                  border-[1px] border-[#25252533] text-xs h-9 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faFlag}
                  className="mr-1 text-[#4FACFE]"
                />
                Flashcard
              </div>
            </Link>

            <div
              className="bg-transparent text-[#6C7580] px-6 py-2 rounded-lg
                  border-[1px] border-[#25252533] text-xs h-9 ml-2 cursor-pointer"
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
              className="bg-transparent text-[#6C7580] h-9 w-9 rounded-lg
                  border-[1px] border-[#25252533] ml-1 flex items-center
                  justify-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
            <div
              className="bg-transparent text-[#6C7580] h-9 w-9 rounded-lg
                  border-[1px] border-[#25252533] ml-1 flex items-center
                  justify-center cursor-pointer"
            >
              <FontAwesomeIcon icon={faPen} />
            </div>
            <div
              className="bg-transparent text-[#6C7580] h-9 rounded-lg ml-2
                  flex items-center justify-center cursor-pointer text-xl"
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#00000013] border-[1.5px] rounded-full" />

        {cardSetDetails.vocabularies.map((vocab) => (
          <Card key={vocab.id} {...vocab} />
        ))}

        <div
          className="px-4 h-9 text-[#6C7580] text-xs rounded-md bg-[#F6F7FB]
          flex items-center justify-center w-fit mx-auto border-[#00000013]
          border-[1.5px] cursor-pointer"
        >
          Add or remove items
        </div>
      </div>
    </div>
  );
}
