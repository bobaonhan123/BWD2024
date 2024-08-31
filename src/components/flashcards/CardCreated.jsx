function CardCreated() {
  return (
    <div className="border p-4 rounded mb-4 shadow-sm flex items-start">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">abandon (v) /əˈbændən/</h2>
        <p className="text-gray-600">
          Meaning: to stop doing an activity before you have finished it
        </p>
        <p className="text-gray-600">
          Từ bỏ, đầu hàng, không làm nữa dù chưa xong
        </p>
        <p className="mt-2 text-sm">
          <strong>Example:</strong>
          <ul className="list-disc ml-4">
            <li>
              The game was abandoned at half-time because of the poor weather
              conditions.
            </li>
            <li>They had to abandon their attempt to climb the mountain.</li>
          </ul>
        </p>
      </div>
      <img
        src="https://via.placeholder.com/100" // Replace with actual image source or prop
        alt="flashcard visual"
        className="w-24 h-24 object-cover ml-4 rounded"
      />
    </div>
  );
}

export default CardCreated;
