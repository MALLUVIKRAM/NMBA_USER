import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/banner_image.svg";
import "./EPledgeOathEN.css";
import back_arrow from "../../assets/back_arrow.svg";
import forward_arrow from "../../assets/forward_arrow.svg";
import number_icon from "../../assets/number_icon.svg";

const EPledgeOtp: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="epledge-page">
      <div className="w-285! h-275! p-6!">
        <div className="relative">
          <img src={BannerImage} alt="banner" className="rounded-2xl" />
          <div className="w-213.5 absolute top-3/4 left-1/2 -translate-x-1/2 bg-[#FFFFFF] rounded-3xl  border-[#E5E7EB] border">
            <div className="gap-6! p-6! bg-[#F9FAFB] rounded-tl-3xl rounded-tr-3xl w-213 h-29!">
              <span className="bg-[#C8E6C9] font-medium text-sm rounded-xl  px-2! py-1! text-[#27682A] border border-[#81C784]">
                500 Pledges Taken Today
              </span>
              <h2 className="pledge-title mt-3!">
                Nasha Mukt Bharat Abhiyaan Pledge
              </h2>
            </div>
            <div style={{ textAlign: "center" }} className="p-32!">
              <div className="text-center">
                <h4 className="text-18px font-semibold text-[#374151]">
                  Verify Mobile
                </h4>
                <p className="text-14px text-[#6b7280] mt-2! flex items-center justify-center gap-1!">
                  Enter the 6-digit OTP sent to{" "}
                  <strong>
                    9912341824{" "}
                    <img
                      src={number_icon}
                      alt="number"
                      className="inline-block w-5! h-5!"
                    />
                  </strong>
                </p>
              </div>

              <div style={otpContainer}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={"otp-${index}"}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    style={otpInput}
                  />
                ))}
              </div>

              <p className="mr-4 text-[#6B7280]">Resend OTP in 45</p>
            </div>

            <div className="p-6! justify-between  flex  border border-[#E5E7EB] rounded-bl-3xl rounded-br-3xl bg-[#F3F4F6] w-213 h-22!">
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
                onClick={() => navigate("/certificate-preview")}
                className="bg-[#003366] text-sm font-medium text-white gap-sm! pt-1! pr-4! pb-1! pl-6! rounded-lg flex items-center cursor-pointer border w-42 h-10!"
              >
                Verify & Submit{" "}
                <img
                  src={forward_arrow}
                  alt="arrow"
                  className="inline-block ml-2!"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const otpContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
};

const otpInput = {
  width: "45px",
  height: "50px",
  textAlign: "center" as const,
  fontSize: "20px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

export default EPledgeOtp;
