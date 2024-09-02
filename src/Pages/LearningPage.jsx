import { FlashcardArray } from "react-quizlet-flashcard";
import CardInfoHeader from "../components/flashcards/CardInfoHeader";
import SearchBar from "../components/SearchBar";

const cards = [
  {
    id: 1,
    frontHTML: (
      <div className="font-semibold ">
        What is the capital of <u>Alaska</u>?
      </div>
    ),
    backHTML: (
      <div className="flex flex-col justify-center items-center">
        <p>
          to stop doing an activity before you have finished it từ bỏ, đầu hàng,
          không làm nữa dù chưa xong
        </p>
        <img
          src="https://www.travelalaska.com/sites/default/files/2021-12/Destinations_CitiesTowns_Juneau_Hero_%28ATIA%29_0.jpg"
          alt="Juneau"
          className="mt- w-44 h-32 object-cover rounded-md"
        />
      </div>
    ),
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
      <div className="flex flex-col items-center">
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
