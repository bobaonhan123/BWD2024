import CardSet from "./CardSet";

function CardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CardSet
          key={index}
          title={card.title}
          words={card.words}
          views={card.views}
          author={card.author}
        />
      ))}
    </div>
  );
}

export default CardGrid;
