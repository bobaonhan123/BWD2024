function PricingCard({ title, price, features, isPopular, gradient }) {
  return (
    <div
      className={`flex flex-col items-center ${
        gradient
          ? "bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 border-8 border-normal-text border-opacity-30"
          : "bg-slate-100"
      } p-8 rounded-lg shadow-lg relative max-w-sm text-main-text`}
    >
      {isPopular && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-20 h-20 absolute -top-11 -left-11 fill-main-blue"
          >
            <path
              fillRule="evenodd"
              d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mono text-sm absolute -top-4 bg-main-blue text-white py-0.5 px-2 font-bold tracking-wider rounded">
            POPULAR
          </p>
        </>
      )}
      <div>
        <h2 className="font-extrabold text-3xl text-center mb-2 text-main-text">
          {title}
        </h2>
        <p className="opacity-60 text-center">
          {gradient
            ? "For agencies and businesses"
            : "For the individual and small teams"}
        </p>
        <div className="flex flex-col items-center my-8">
          <p className="font-extrabold text-4xl">{price}</p>
          <p className="text-sm opacity-60">/month</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>
            <b>{feature}</b>
          </p>
        ))}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 border-main-blue border-4 hover:bg-main rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
