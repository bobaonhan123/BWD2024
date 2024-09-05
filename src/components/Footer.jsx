
import { footerHiddenRoutes } from "../configurations/HiddenComponentConfigurations";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  for (const route of footerHiddenRoutes) {
    if (location.pathname.includes(route)) {
      return null;
    }
  }
  return (
    <footer
      className="mx-0 my-0
        h-64 mt-10 flex flex-col justify-center
        max-lg:h-auto">
      <hr className="border-t-1 border-[#bdbac0] mx-96 max-lg:mx-10" />
      <div
        className="flex
            h-44
            items-center
            justify-between
            px-10
            mx-80
            max-lg:flex-col
            max-lg:mx-0
            max-lg:h-auto
            max-lg:items-start
            max-lg:my-6
            ">
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="mb-4 text-sm font-semibold uppercase text-[#4c5664]">
            About
          </p>
          <div className="flex flex-col space-y-3">
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Pricing
            </p>
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Contact
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="mb-4 text-sm font-semibold uppercaseg text-[#4c5664]">
            Product
          </p>
          <div className="flex flex-col space-y-3">
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Update
            </p>
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Blog
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="mb-4 text-sm font-semibold uppercase text-[#4c5664]">
            Social
          </p>
          <div className="flex flex-col space-y-3">
              <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
                Facebook
              </p>
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Instagram
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="mb-4 text-sm font-semibold uppercase text-[#4c5664]">
            Help & Info
          </p>
          <div className="flex flex-col space-y-3">
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline ">
              Terms And Conditions
            </p>
            <p className="text-sm text-[#6C7580] text-hover flex w-fit items-center space-x-2 capitalize hover:underline">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm mb-2 text-[#4B5563]">Made by Khỉ Con</p>
      <p className="text-sm text-[#6C7580]">
        © TakeItEasy 2024. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
