import React from "react";
import "./EPledgeOathEN.css";
import certificateTemplate from "../../assets/certificate_template.png";
import certificateTick from "../../assets/certificate_tick.svg";
import whatsapp_icon from "../../assets/whatsapp_icon.svg";
import facebook_icon from "../../assets/facebook_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import mobile_icon from "../../assets/mobile_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import digilocker_icon from "../../assets/digilocker_icon.svg";
import download_icon from "../../assets/download_icon.svg";
import print_icon from "../../assets/print_icon.svg";

const CertificatePreview: React.FC = () => {
  return (
    <div className="epledge-page p-5!">
      <div className="bg-[#219653] flex flex-col items-center justify-center rounded-[20px]">
        <div
          style={{
            color: "#fff",
            borderRadius: 18,
            padding: "32px 24px 24px 24px",

            width: "90%",
            height: 400,
            margin: "0 auto 32px auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src={certificateTick}
            alt="Success Tick"
            style={{
              width: 60,
              height: 60,
              marginBottom: 12,
              margin: "0 auto",
              display: "block",
            }}
          />
          <h2 style={{ fontWeight: 700, fontSize: 28, margin: 0 }}>
            Pledge Successfully Recorded!
          </h2>
          <p style={{ fontSize: 18, margin: "16px 0 0 0", color: "#fff" }}>
            Thank you for your commitment to a Drug-Free India and taking the{" "}
            <br />
            Nasha Mukt Bharat Abhiyaan Pledge. Your certificate has been
            generated.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              padding: 32,
              maxWidth: 700,
              width: "100%",
              margin: "0 auto",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 300,
            }}
          >
            <img
              src={certificateTemplate}
              alt="Certificate"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            />
            <div className="flex flex-col items-center my-6! gap-2!">
              <p className="text-sm text-[#6B7280] text-align:center">
                Share Your commitment
              </p>
              <div className="flex gap-4!">
                <img
                  src={whatsapp_icon}
                  alt="WhatsApp Share"
                  className="w-8 h-8 cursor-pointer"
                />
                <img
                  src={facebook_icon}
                  alt="Facebook Share"
                  className="w-8 h-8 cursor-pointer"
                />

                <img
                  src={twitter_icon}
                  alt="Twitter Share"
                  className="w-8 h-8 cursor-pointer"
                />
                <img
                  src={mobile_icon}
                  alt="Mobile Share"
                  className="w-8 h-8 cursor-pointer"
                />
                <img
                  src={mail_icon}
                  alt="Mail Share"
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4 mt-6! ">
              <button className="cursor-pointer!">
                <img src={print_icon} alt="Print" className="w-12 h-12" />
              </button>
              <button className="rounded-lg text-[#602EF9] flex border border-[#602EF9] gap-2! bg-white pt-4! pr-6! pb-4! pl-8! w-auto! h-12! items-center">
                Save to DigiLocker{" "}
                <img
                  src={digilocker_icon}
                  alt="DigiLocker"
                  className="w-6 h-6!"
                />
              </button>
              <button className="pledge-cta flex gap-2! bg-[#003366] pt-4! pr-6! pb-4! pl-8! w-auto! h-12! items-center">
                Download Certificate
                <img src={download_icon} alt="Download" className="w-6 h-6!" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
