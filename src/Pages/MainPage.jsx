import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureSection from "../components/Feature";
import PromoteImage from "../components/PromoteImage";
import AccordionText from "../components/AccordionText";
import LandingPanel from "../components/LandingPanel";
function MainPage() {
  const featureContent = [
    {
      title: "Create New Words",
      subtitle: "Build your own word collection",
      paragraphs: [
        "Imagine reading a book or watching a movie and coming across some cool new words that you want to add to your vocabulary. Or perhaps you already have a long list of words that you need to memorize.",
        "🏆 We offer a personalized approach to word creation based on your interests and needs, helping you save time and stay focused on your goals.",
      ],
      imageUrl:
        "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/458084040_499261036155988_381838654889462165_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGdJoQnbKIe9fJ2Q5hZYNeaLpv1GirqhKcum_UaKuqEp48yV7eyFvZbp1YHPK0tP1MAZqIQf_MwadiQYly9MocV&_nc_ohc=c8nRKJS10fsQ7kNvgFs8_WK&_nc_ht=scontent.fdad1-1.fna&oh=03_Q7cD1QHouBp8n1MLta-85N8sZWgN0zhM6ScyA9zu4890eYNnCg&oe=66FFFE0D",
      imageAlt: "Image representing word creation",
    },
    {
      title: "Track Your Progress",
      subtitle: "Stay motivated and see your growth",
      paragraphs: [
        "Keep track of the words you’ve learned and the ones you need to work on.",
        "📈 Use our tracking tools to monitor your progress over time and stay motivated as you improve your vocabulary.",
      ],
      imageUrl:
        "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/457804712_864755768917523_256416563780535443_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGn9Suxl8RHrmv8o37CZaf346MEfsmD3GHjowR-yYPcYRYVD9vySj77wgxPWLq4RmWoIEQUpMC9I_i7tTapfMQj&_nc_ohc=BHqxdAgqceQQ7kNvgFtKygq&_nc_ht=scontent.fdad1-3.fna&oh=03_Q7cD1QHMIJil5OxuCrr2M0SiqWcbf_xGkx4AnNl1UeSNXHRaLA&oe=66FFE698",
      imageAlt: "Image representing progress tracking",
    },
    {
      title: "Engage with the Community",
      subtitle: "Learn together with others",
      paragraphs: [
        "Join our community of language learners and share your word collections.",
        "🤝 Engage in discussions, share tips, and motivate each other as you work towards your language learning goals.",
      ],
      imageUrl:
        "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/456820373_1641337176435049_9191306335950127392_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHMor0L6mDOKhZWfdQkLiACtZG0t70NVWO1kbS3vQ1VY56DM_w-4mP60Zcgs1vBFL9HmzJ-C93K_jfQuRJoF8KE&_nc_ohc=uSGOO0m4W_MQ7kNvgFU-lVs&_nc_ht=scontent.fdad1-1.fna&oh=03_Q7cD1QHeh-LgHTeBL5ehuoxo6YXiiCQN_r7c9GNTjSKEIi13OQ&oe=66FFFA97",
      imageAlt: "Image representing community engagement",
    },
  ];

  return (
    <>
      <Header />
      <div className="pt-11 w-full min-h-screen">
        <div className="w-full flex flex-col items-center ">
          <h1 className="font-semibold text-7xl mt-28 mb-10">
            <p
              className="bg-gradient-to-r
            from-[#00F2FE] from-21%
            to-[#4FACFE] bg-clip-text text-transparent
            h-28
            max-lg:h-auto
            max-lg:text-5xl
            ">
              Boost your vocabulary
            </p>
            <p
              className="text-[#4B5563] h-24
            max-lg:h-auto
            max-lg:text-5xl">
              and language skills with us
            </p>
          </h1>
          <div
            className="
          flex items-center 
          justify-center
          w-full
          max-lg:flex-col
          max-lg:items-start">
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
          max-md:mx-5">
            <p
              className="text-white font-semibold text-lg
            max-md:text-base">
              Let’s start explore the magic
            </p>
          </a>
        </div>
        <PromoteImage img="https://scontent.xx.fbcdn.net/v/t1.15752-9/456864062_484195677864395_8942584632118598915_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGcrVQCu8qJrTTd-HT6cvUxhxy9u2dvBeWHHL27Z28F5Qx5LY6QhYghkJpEdjW2t_xTnZRLOBNCjprVJQ4kkywW&_nc_ohc=bnfhCUbl2IoQ7kNvgHj1zh2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AzY5bBOdUEmhEeN7-0f3PyO&oh=03_Q7cD1QFUubkztqfBOmoG3AkY9X44yNsuSTS7RwvcnSifSPS-6A&oe=67008A2C"></PromoteImage>
        <div className="text-center mt-32">
          <div className="text-center text-2xl font-bold sm:text-5xl">
            <h1
              className="bg-gradient-to-r
            from-[#00F2FE] from-21%
            to-[#4FACFE] bg-clip-text text-transparent mb-4
            ">
              The more that you learn
            </h1>
            <h1 className="text-[#4B5563]">the more places you’ll go.</h1>
          </div>
          <img
            className="mx-auto object-contain h-60"
            src="https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Fquote-hero.png&w=640&q=75"
          />
        </div>
        <div className="p-20">
          {featureContent.map((feature, index) => (
            <FeatureSection
              key={index}
              imageOnRight={index % 2 === 0}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              title={feature.title}
              subtitle={feature.subtitle}
              paragraphs={feature.paragraphs}
            />
          ))}
        </div>
      </div>
      <div className=" space-y-3 text-center">
        <p className="text-sm text-main-blue font-semibold">GOT A QUESTION?</p>
        <h1 className="text-3xl font-semibold text-[#4b5563] sm:text-4xl">
          Things you might wonder
        </h1>
      </div>
      <AccordionText></AccordionText>
      <LandingPanel></LandingPanel>
      <Footer />
    </>
  );
}

export default MainPage;
