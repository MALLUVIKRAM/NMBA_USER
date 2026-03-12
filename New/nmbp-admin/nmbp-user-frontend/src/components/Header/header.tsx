import React from "react";
import GovernmentOfIndia from "../../assets/governmentofindia_icon.svg";
import Constrast from "../../assets/contrast_icon.svg";
import Accessiblity from "../../assets/accessiblity_icon.svg";
import Globe from "../../assets/globe.svg";
import ArrowDropDown from "../../assets/dropdownarrow.svg";
import linkopen from "../../assets/linkopen_icon.svg";
const Header: React.FC = () => {
  return (
    <div className="w-full bg-[#003366] text-white px-4! md:px-6! py-2! flex flex-col items-start md:flex-row md:justify-between md:items-center text-sm gap-4! md:gap-0">
      {/* Left: Logo and Hamburger */}
      <div className="flex items-center gap-4! w-full md:w-auto">
        <button className="md:hidden p-1! hover:opacity-80 transition"></button>
        <button className="hover:opacity-80 transition">
          <img
            src={GovernmentOfIndia}
            alt="Government of India"
            className="hover:opacity-80 transition"
          />
        </button>
        <p
          className="text-[14px] font-medium text-[#FFFFFF] cursor-pointer"
          onClick={() => window.open("https://www.india.gov.in/", "_blank")}
        >
          Government of India
          <img
            src={linkopen}
            alt="Open link"
            className="inline-block w-2! h-2! mb-1! ml-1!"
          />
        </p>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center divide-x divide-[#F9FAFB] px-2! md:px-3! ">
        <button className="px-2! md:px-4! hover:opacity-80 transition text-xs! md:text-sm! whitespace-nowrap">
          Skip to Main Content
        </button>

        <button className="px-2! md:px-4! hover:opacity-80 transition text-[#F9FAFB] text-xs! md:text-sm!">
          A<sup>-</sup>
        </button>

        <button className="px-2! md:px-4! hover:opacity-80 transition text-[#F9FAFB] text-xs! md:text-sm!">
          A
        </button>

        <button className="px-2! md:px-4! hover:opacity-80 transition text-[#F9FAFB] text-xs! md:text-sm!">
          A<sup>+</sup>
        </button>

        <button className="px-2! md:px-4! hover:opacity-80 transition">
          <img src={Constrast} alt="Contrast" className="h-3 md:h-4" />
        </button>

        <button className="px-2! md:px-4! hover:opacity-80 transition">
          <img src={Accessiblity} alt="Accessibility" className="h-3 md:h-4" />
        </button>

        <button className="px-2! md:px-4! text-xs! md:text-sm! hover:opacity-80 transition flex items-center whitespace-nowrap gap-2!">
          <img src={Globe} alt="Globe" className="h-3 md:h-4" />
          English
          <img src={ArrowDropDown} alt="Arrow" className="w-2! h-1!" />
        </button>
      </div>
    </div>
  );
};

export default Header;
