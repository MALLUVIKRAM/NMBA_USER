import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner_image.svg";
import back_arrow from "../../assets/back_arrow.svg";
import forward_arrow from "../../assets/forward_arrow.svg";
import pulse_icon from "../../assets/pulse_icon.svg";
const RetrieveCertificate: React.FC = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  return (
    <div className="epledge-page">
      <div className="w-285! h-275! p-6!">
        <div className="relative">
          <img src={bannerImage} alt="banner" className="rounded-2xl" />
          <div className="w-200 absolute top-3/4 left-1/2 -translate-x-1/2  bg-[#FFFFFF] mx-2! rounded-3xl mb-2! border-[#E5E7EB] border">
            <div className="gap-2! mt-0! p-6! bg-[#F9FAFB] rounded-tl-3xl rounded-tr-3xl">
              <span className="bg-[#C8E6C9] font-medium text-sm rounded-2xl  px-3! py-2! text-[#27682A] border border-[#81C784]">
                <img
                  src={pulse_icon}
                  alt="pulse"
                  className="inline-block mb-1! ml-0! mr-1! w-2! h-2! items-start "
                />{" "}
                500 Pledges Taken Today
              </span>
              <h2 className="pledge-title mt-3!">
                Nasha Mukt Bharat Abhiyaan Pledge
              </h2>
            </div>
            <div
              style={{ textAlign: "center" }}
              className="p-32! gap-4! items-center justify-center flex flex-col"
            >
              <div className="gap-md">
                <h4 className="text-[#374151] text-18px font-semibold">
                  Retrieve Certificate
                </h4>
                <p className="text-[#6B7280] text-14px font-normal">
                  Please enter the mobile number you used when taking the
                  pledge.
                  <br />
                  We will send an OTP to verify.
                </p>
              </div>

              <div className="flex gap-8! text-align-center">
                <div className="flex items-center gap-0! border border-[#E5E7EB] rounded-lg w-87! h-11!">
                  <div className="gap-2.5! border border-[#D1D5DB] text-[#6B7280] text-sm font-semibold flex items-center bg-[#F3F4F6] rounded-tl-lg rounded-bl-lg w-12! h-11! p-3!">
                    +91
                  </div>
                  <input
                    placeholder="  Enter 10 digit mobile number"
                    className="text-sm text-[#6B7280] font-normal w-86! h-12! border-none outline-none"
                    value={mobile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setMobile(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="p-6! justify-between mt-3! flex  border-[#E5E7EB]  bg-[#F3F4F6] rounded-bl-3xl rounded-br-3xl w-200 h-22!">
              <button
                onClick={() => navigate(-1)}
                className="text-sm font-medium text-[#003366] gap-2! pt-2.5! pr-6! pb-2.5! pl-4! rounded-lg cursor-pointer flex items-center border border-[#003366] w-24! h-10!"
              >
                <img
                  src={back_arrow}
                  alt="arrow"
                  className="inline-block mr-0!"
                />
                Back
              </button>
              <button
                onClick={() => navigate("/epledge/otp")}
                className="bg-[#003366] text-sm text-white gap-2! pt-2.5! pr-4! pb-2.5! pl-6! rounded-lg flex items-center cursor-pointer border w-29.5 h-10!"
              >
                Get OTP
                <img
                  src={forward_arrow}
                  alt="arrow"
                  className="inline-block ml-0!"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrieveCertificate;
