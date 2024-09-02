// ListFlashcards.js
import { useState } from "react";

import CardSet from "../components/CardSet";
import { FakeCardsSet } from "../Fakedata/FakeCardsSet";
import SearchAndCategory from "../components/SearchAndCategory";

export default function ListFlashcards() {
  const [category, setCategory] = useState("my-cards");

  return (
    <div className="w-full pt-4">
      <SearchAndCategory category={category} setCategory={setCategory} />
      <div className="grid grid-cols-3 gap-4 mt-8 px-12">
        {FakeCardsSet.map((card, index) => (
          <CardSet key={index} data={card} />
        ))}
      </div>
    </div>
  );
}
