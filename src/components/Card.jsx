export default function Card({ frontSide, backSide, image }) {
  return (
    <div
      className="mx-6 my-8
     bg-[#f6f7fb]
    rounded-lg
    flex
    py-6 pr-6 pl-10"
    >
      <div className="w-full rounded-lg text-main-text">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="font-bold">{frontSide}</div>
          </div>
          <div className="flex items-center"></div>
        </div>
        <hr className="text-main-text text-opacity-25 mt-3 mr-6" />
        <div className="text-left mt-5 mr-6">{backSide}</div>
      </div>
      <div className="rounded-lg">
        <img
          src={image}
          alt="word"
          className="w-60 
                    h-28 object-cover
                    rounded-lg
                    "
        />
      </div>
    </div>
  );
}
