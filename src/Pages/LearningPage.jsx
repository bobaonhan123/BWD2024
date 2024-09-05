import { FlashcardArray } from "react-quizlet-flashcard";
import CardInfoHeader from "../components/flashcards/CardInfoHeader";
import SearchAndCategory from "../components/SearchAndCategory";
import FontCard from "../components/flashcards/FontCard";
import BackCard from "../components/flashcards/BackCard";
import { getDetailCardSet } from "../api/flashcardAPI";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// const cards = [
//   {
//     id: 1,
//     frontHTML: <FontCard />,
//     backHTML: <BackCard />,
//   },
//   {
//     id: 2,
//     frontHTML: <>What is the capital of California?</>,
//     backHTML: <>Sacramento</>,
//   },
//   {
//     id: 3,
//     frontHTML: <>What is the capital of New York?</>,
//     backHTML: <>Albany</>,
//   },
// ];

function LearningPage() {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const cardsetId = paths[paths.length - 2];
  console.log(cardsetId);
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getDetailCardSet(cardsetId);
      setCards(response);
      console.log("rp:",response);
      setTitle(response.title);
      const cardstmp = response.vocabularies;
      console.log("cardstmp:",cardstmp);
      const cardsetdata = [];
      cardstmp.map((card) => {
        cardsetdata.push({
          id: card.id,
          frontHTML: card.word,
          backHTML: card.definition
        });
      });
      setCards(cardsetdata);
      return response;
    }
    fetchData();
    // const cardsetdata = fetchData();
    // console.log(cardsetdata);
    // setCards(cardsetdata);
  }, [location]);



  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-3/5">
      <SearchAndCategory />
      <div className="flex flex-col items-center mt-8">
        <CardInfoHeader title={title}/>
        <div className="h-6"></div>
        <FlashcardArray
          frontContentStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Đảm bảo chiếm toàn bộ chiều cao của thẻ
          }}
          backContentStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Đảm bảo chiếm toàn bộ chiều cao của thẻ
          }}
          cards={cards}
        />
      </div>
    </div>
  );
}

export default LearningPage;
