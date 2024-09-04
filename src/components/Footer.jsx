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
        max-lg:h-auto"
    >
      <hr className="border-t-1 border-[#6c7580a8] mx-96 max-lg:mx-10" />
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
            "
      >
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="font-semibold text-lg">About</p>
          <p className="text-sm text-[#6C7580]">Pricing</p>
          <p className="text-sm text-[#6C7580]">Contact</p>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="font-semibold text-lg">Product</p>
          <p className="text-sm text-[#6C7580]">Update</p>
          <p className="text-sm text-[#6C7580]">Blog</p>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="font-semibold text-lg">Social</p>
          <p className="text-sm text-[#6C7580]">Facebook</p>
          <p className="text-sm text-[#6C7580]">Instagram</p>
        </div>
        <div className="flex flex-col items-start max-lg:my-2">
          <p className="font-semibold text-lg">Help & Info</p>
          <p className="text-sm text-[#6C7580]">Terms And Conditions</p>
          <p className="text-sm text-[#6C7580]">Privacy Policy</p>
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
