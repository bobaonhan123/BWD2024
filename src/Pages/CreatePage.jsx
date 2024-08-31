import FlashcardForm from "../components/flashcards/FlashcardForm";
import SearchBar from "../components/SearchBar";

function CreatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar />
      <FlashcardForm />
    </div>
  );
}

export default CreatePage;
