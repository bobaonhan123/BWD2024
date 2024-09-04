import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="grid lg:grid-cols-2 px-8 gap-10 text-zinc-800 mt-10">
      <PricingCard
        title="Starter"
        price="$9"
        features={[
          "AI-Powered Flashcards",
          "Limited Vocabulary Sets",
          "Personalized Learning Tips",
          "Progress Tracking",
        ]}
      />
      <PricingCard
        title="Pro"
        price="$29"
        features={[
          "Advanced AI-Powered Flashcards",
          "Custom Vocabulary Sets",
          "Advanced Learning Insights",
          "AI Voice Pronunciation",
          "Unlimited Vocabulary Sets",
        ]}
        isPopular
        gradient
      />
    </div>
  );
}

export default Pricing;
