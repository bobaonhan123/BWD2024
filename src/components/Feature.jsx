const FeatureSection = ({
  imageOnRight,
  imageUrl,
  imageAlt,
  title,
  subtitle,
  paragraphs,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
      {/* Image Section */}
      {!imageOnRight && (
        <div className="w-[500px] h-[300px] flex justify-center items-center mb-8 p-4 overflow-hidden rounded-xl shadow-lg">
          <img
            src={`${imageUrl}`}
            alt="Placeholder Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}

      {/* Feature Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left p-4 md:p-8">
        <h2
          style={{ color: "#2da3f7" }}
          className="text-green-500 text-sm font-bold uppercase mb-2"
        >
          {title}
        </h2>
        <h1 className="text-[#4B5563] text-3xl font-bold mb-4">{subtitle}</h1>
        {paragraphs.map((paragraph, index) => (
          <p className="text-[#4B5563] text-gray-600 mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Image Section (if image is on the right) */}
      {imageOnRight && (
        <div className="w-[500px] h-[300px] flex justify-center items-center mb-8 p-4  overflow-hidden rounded-xl shadow-lg">
          <img
            src={`${imageUrl}`}
            alt="Placeholder Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
