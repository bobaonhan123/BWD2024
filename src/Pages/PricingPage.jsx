import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/pricing/Pricing";

function PricingPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col marker:pt-11 w-full min-h-screen items-center justify-center">
        <h1
          className="font-semibold text-5xl mt-8 bg-gradient-to-l
            from-[#00F2FE] from-21%
            to-[#4FACFE] bg-clip-text text-transparent
            h-16
           "
        >
          Pricing Plans
        </h1>
        <p className="text-[#6C7580] text-lg">
          Choose from our plans to access tailored features
        </p>
        <p className="text-[#6C7580] text-lg">
          and resources that fit your learning goals.
        </p>

        <Pricing />
      </div>
      <Footer />
    </>
  );
}

export default PricingPage;
