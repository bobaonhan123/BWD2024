import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const data = [
  {
    name: "Introduction",
    description:
      "Vocala is a vocabulary learning platform that helps you learn and memorize new words in a better way. It also offers advanced AI features to enhance your learning experience and allows you to create customized word lists tailored to your interests and needs.",
  },
  {
    name: "Usage Steps",
    description:
      "Just follow 2 simple steps: Start creating your word list (at least 4 words). When it's time to review, you'll receive a notification on the app.",
  },
  {
    name: "Platform Compatibility",
    description:
      "Although Vocala is primarily designed for desktop usage, some features are still available on mobile and tablet browsers. For the best experience, we recommend accessing Vocala through a desktop browser. However, we are planning to release a dedicated mobile version in the future.",
  },
  {
    name: "Language Learning Recommendation",
    description:
      "While it is possible to create multiple languages for your account, we recommend focusing on one language on an account to optimize your learning experience. This way, you can fully immerse yourself in the language and avoid confusion or mixing up different languages.",
  },
  {
    name: "Subscription Management",
    description:
      "To manage your subscription, simply go to your Account page and click on Manage subscription. Once you're there, you can make changes to your subscription such as upgrading from a monthly to an annual plan, cancelling your subscription, or updating your payment information.",
  },
  {
    name: "Feature Requests",
    description:
      "You sure can! You can easily request a feature by using the feedback box on the app or by sending an email to vocala.hq@gmail.com. We would love to hear from you!",
  },
];

function AccordionText() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="w-full px-4 pt-10 sm:pt-14">
        <div className="mx-auto w-full max-w-2xl divide-y divide-dark-xs rounded-2xl dark:divide-light-xs sm:bg-primary-light sm:p-10 sm:dark:bg-secondary-dark text-[#4B5563] bg-[#ffffff]">
          {data.map((item, index) => (
            <div key={index} className="border-[#f2f2f2]">
              <button
                className="flex w-full select-none justify-between py-5 text-left text-lg font-medium outline-none"
                type="button"
                onClick={() => handleToggle(index)}
              >
                <span>{item.name}</span>
                <FontAwesomeIcon 
                  icon={faPlus} 
                  className={`text-[#4FACFE] transition duration-300 ease-in-out ${openIndex === index ? 'rotate-45' : 'rotate-0'}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden transform ${openIndex === index ? 'max-h-[1000px] scale-100 opacity-100 ' : 'max-h-0 scale-0 opacity-0'}`}
              >
                <div className="text-[#4b5563] px-0 pb-4 text-left text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default AccordionText;
