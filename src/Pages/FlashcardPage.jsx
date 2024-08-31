import SearchBar from "../components/SearchBar";
import CardGrid from "../components/flashcards/CardGrid";

function FlashcardPage() {
  const cards = Array(9).fill({
    title: "Cambridge Vocabulary for IELTS (20 units)",
    words: 200,
    views: 112,
    author: {
      name: "Bao Nhom Ho Sy",
      image:
        "https://i.pinimg.com/236x/cd/cb/0c/cdcb0cb30bc700c53f12eff840156b29.jpg",
    },
  });
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar />
      <CardGrid cards={cards} />
    </div>
  );
}

export default FlashcardPage;
