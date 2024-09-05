import { useState, useEffect } from "react";

import CardSet from "../components/CardSet";
import SearchAndCategory from "../components/SearchAndCategory"; // Đảm bảo bạn nhập đúng đường dẫn tới hàm này
import {
  getGlobalFlashcardSet,
  getUserFlashcardSet,
} from "../api/flashcardAPI";
// Import thêm hàm để lấy dữ liệu toàn cục nếu cần

export default function ListFlashcards() {
  const [category, setCategory] = useState("my-cards");
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        if (category === "explore") {
          // Gọi hàm để lấy dữ liệu toàn cục nếu cần
          const data = await getGlobalFlashcardSet();
          setFlashcards(data);
        } else {
          const data = await getUserFlashcardSet();
          setFlashcards(data);
        }
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [category]); // Thay đổi dependency array để fetch dữ liệu khi category thay đổi

  return (
    <div className="w-full pt-4">
      <SearchAndCategory category={category} setCategory={setCategory} />
      <div className="grid grid-cols-3 gap-4 mt-8 px-12">
        {flashcards.map((card, index) => (
          <CardSet key={index} data={card} />
        ))}
      </div>
    </div>
  );
}
