function PromoteImage({ img }) {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <img src={img} alt="A brief description of the image" className="w-full rounded-xl shadow-lg sm:rounded-2xl"></img>
    </div>
  );
}

export default PromoteImage;
