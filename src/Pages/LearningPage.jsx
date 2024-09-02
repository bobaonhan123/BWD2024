import { FlashcardArray } from "react-quizlet-flashcard";
import CardInfoHeader from "../components/flashcards/CardInfoHeader";
import SearchAndCategory from "../components/SearchAndCategory";
import FontCard from "../components/flashcards/FontCard";
import BackCard from "../components/flashcards/BackCard";

const cards = [
  {
    id: 1,
    frontHTML: <FontCard />,
    backHTML: <BackCard />,
  },
  {
    id: 2,
    frontHTML: <>What is the capital of California?</>,
    backHTML: <>Sacramento</>,
  },
  {
    id: 3,
    frontHTML: <>What is the capital of New York?</>,
    backHTML: <>Albany</>,
  },
];

function LearningPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchAndCategory />
      <div className="flex flex-col items-center mt-8">
        <CardInfoHeader />
        <div className="h-10"></div>
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
