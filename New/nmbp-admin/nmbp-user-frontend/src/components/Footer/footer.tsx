import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-[#002244] py-4! mt-8! px-8! w-full h-13!">
      <span className=" text-[#FFFFFF] text-left w-250.5 h-5! text-[14px] font-medium">
        © 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY
        Government of India®2025 UX4G
      </span>
      <div className="flex  w-63.5! h-5! gap-4!">
        <span className="text-[14px] text-[#FFFFFF] font-medium hover:opacity-80 cursor-pointer">
          Terms&Conditions
        </span>
        <hr className="border border-[#9CBFE3]  w-5! rotate-90 " />
        <span className="text-[14px] text-[#FFFFFF] font-medium hover:opacity-80 cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
