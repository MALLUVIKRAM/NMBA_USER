import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/banner_image.svg";
import "./EPledgeOathEN.css";
import back_arrow from "../../assets/back_arrow.svg";
import forward_arrow from "../../assets/forward_arrow.svg";
import required_asterix_icon from "../../assets/required_asterix_icon.svg";
import pulse_icon from "../../assets/pulse_icon.svg";
const EPledgeform: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="epledge-page">
      <div className="w-285! h-275 p-6!">
        <div className="relative">
          <img src={BannerImage} alt="banner" className="rounded-2xl " />
          <div className="w-200 absolute top-3/4 left-1/2 -translate-x-1/2  bg-[#FFFFFF] mx-2! rounded-3xl mb-2! border-[#E5E7EB] border">
            <div className="gap-6! mt-0! p-6! bg-[#F9FAFB] rounded-tl-3xl rounded-tr-3xl">
              <span className="bg-[#C8E6C9] font-medium text-sm rounded-2xl  px-3! py-2! text-[#27682A] border border-[#81C784]">
                 <img
                  src={pulse_icon}
                  alt="pulse"
                  className="inline-block mb-1! ml-0! mr-1! w-2! h-2! items-start "
                />{" "}
                500 Pledges Taken Today
              </span>
              <h3 className="pledge-title mt-3!">
                Nasha Mukt Bharat Abhiyaan Pledge
              </h3>
            </div>
            <div className=" p-6! gap-8!">
              <h4 className="mp-8! mt-8! pl-3! text-sm font-medium text-[#374151]">
                GENERATE CERTIFICATE
                <hr className="border-[#E5E7EB] mb-8!" />
              </h4>
              <div
                style={gridStyle}
                className="rounded-xl pr-3! pl-3! gap-3xl!"
              >
                <Input
                  label="Full Name "
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Name as per records"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input
                  label="Age"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Years"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input
                  label="Gender"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Select Gender"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input
                  label="Pincode"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Eg: 110001"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input
                  label="District"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Select District"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium  "
                />
                <Input
                  label="State"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="Select State"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input
                  label="Mobile Number"
                  icon={<img src={required_asterix_icon} alt="required" />}
                  placeholder="+91 10 digit mobile number"
                  classname="flex items-center gap-1! text-sm text-[#374151] font-medium"
                />
                <Input label="Email Address" placeholder="name@example.com" />
                <p className="text-sm text-[#4B5563] col-span-full">
                  This number will be used for verification in the next step.
                </p>
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
                className="bg-[#003366] text-xs font-medium text-[#FFFFFF] gap-2! pt-2! pr-4! pb-2! pl-6! rounded-lg flex items-center cursor-pointer border w-46 h-10!"
              >
                Send OTP & Verify
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

const Input = ({
  label,
  placeholder,
  icon,
  classname,
}: {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  classname?: string;
}) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <label
      style={{ fontSize: "14px", marginBottom: "6px" }}
      className={classname}
    >
      {label}
      {icon}
    </label>
    <input
      placeholder={placeholder}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #d1d5db",
      }}
    />
  </div>
);

// const cardStyle = {
//   background: "#fff",
//   padding: "30px",
//   borderRadius: "16px",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
//   maxWidth: "900px",
//   margin: "-80px auto 0",
// };

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};
export default EPledgeform;
