import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import FeatureSection from "../components/Feature";
function MainPage() {
  const featureContent = [
    {
      title: 'Create New Words',
      subtitle: 'Build your own word collection',
      paragraphs: [
        'Imagine reading a book or watching a movie and coming across some cool new words that you want to add to your vocabulary. Or perhaps you already have a long list of words that you need to memorize.',
        '🏆 We offer a personalized approach to word creation based on your interests and needs, helping you save time and stay focused on your goals.'
      ],
      imageUrl: 'https://via.placeholder.com/500x300.png?text=Create+New+Words',
      imageAlt: 'Image representing word creation'
    },
    {
      title: 'Track Your Progress',
      subtitle: 'Stay motivated and see your growth',
      paragraphs: [
        'Keep track of the words you’ve learned and the ones you need to work on.',
        '📈 Use our tracking tools to monitor your progress over time and stay motivated as you improve your vocabulary.'
      ],
      imageUrl: 'https://via.placeholder.com/500x300.png?text=Track+Your+Progress',
      imageAlt: 'Image representing progress tracking'
    },
    {
      title: 'Engage with the Community',
      subtitle: 'Learn together with others',
      paragraphs: [
        'Join our community of language learners and share your word collections.',
        '🤝 Engage in discussions, share tips, and motivate each other as you work towards your language learning goals.'
      ],
      imageUrl: 'https://via.placeholder.com/500x300.png?text=Engage+with+the+Community',
      imageAlt: 'Image representing community engagement'
    }
  ];


  return (
    <>
      <Header />
      <div className="pt-11 w-full min-h-screen">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-semibold text-7xl mt-28 mb-10">
            <p
              className="bg-gradient-to-r
            from-[#00F2FE] from-21%
            to-[#4FACFE] bg-clip-text text-transparent
            h-28
            max-lg:h-auto
            max-lg:text-5xl
            "
            >
              Boost your vocabulary
            </p>
            <p
              className="text-[#4B5563] h-24
            max-lg:h-auto
            max-lg:text-5xl"
            >
              and language skills with us
            </p>
          </h1>
          <div
            className="
          flex items-center 
          justify-center
          w-full
          max-lg:flex-col
          max-lg:items-start"
          >
            <p className="text-[#6C7580] text-lg mx-4">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#4FACFE] w-6"
              />
              Memorize with Active Learning Methods
            </p>
            <p className="text-[#6C7580] text-lg mx-4">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#4FACFE] w-6"
              />
              Impove Speaking Skill with AI
            </p>
            <p className="text-[#6C7580] text-lg mx-4">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#4FACFE] w-6"
              />
              Gamify learning with word games
            </p>
          </div>
          <a
            href="#"
            className="mx-8 text-base h-12
          bg-gradient-to-r from-[#00F2FE] from-21%
          to-[#4FACFE]
          px-10 my-10
          flex items-center rounded-full justify-center
          max-md:px-5
          max-md:mx-5"
          >
            <p
              className="text-white font-semibold text-lg
            max-md:text-base"
            >
              Let’s start explore the magic
            </p>
          </a>
        </div>
        <div className="text-center mt-32">
          <div className="text-center text-2xl font-bold sm:text-5xl">
            <h1 className="bg-gradient-to-r
            from-[#00F2FE] from-21%
            to-[#4FACFE] bg-clip-text text-transparent mb-4
            ">The more that you
              learn</h1>
            <h1 className="text-[#4B5563]">the more places you’ll go.</h1>
          </div>
          <img className="mx-auto object-contain h-60" src="https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Fquote-hero.png&w=640&q=75" />
        </div>
        <div className="p-20">
          <FeatureSection
            imageOnRight={false}
            imageUrl={featureContent[0].imageUrl}
            imageAlt={featureContent[0].imageAlt}
            title={featureContent[0].title}
            subtitle={featureContent[0].subtitle}
            paragraphs={featureContent[0].paragraphs}
          />
          <FeatureSection
            imageOnRight={true}
            imageUrl={featureContent[1].imageUrl}
            imageAlt={featureContent[1].imageAlt}
            title={featureContent[1].title}
            subtitle={featureContent[1].subtitle}
            paragraphs={featureContent[1].paragraphs}
          />
          <FeatureSection
            imageOnRight={false}
            imageUrl={featureContent[2].imageUrl}
            imageAlt={featureContent[2].imageAlt}
            title={featureContent[2].title}
            subtitle={featureContent[2].subtitle}
            paragraphs={featureContent[2].paragraphs}
          />
        </div>
      </div>
    </>
  );
}

export default MainPage;
