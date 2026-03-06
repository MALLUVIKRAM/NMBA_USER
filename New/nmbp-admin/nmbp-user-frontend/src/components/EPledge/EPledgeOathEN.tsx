import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EPledgeOathEN.css";
import BannerImage from "../../assets/banner_image.svg";

const EPledgeOathEN: React.FC = () => {
  const navigate = useNavigate();
  const [englishSelected, setEnglishSelected] = useState(true);

  return (
    <div className="epledge-page">
      {/* <div className="epledge-banner" /> */}
      <div className="w-285! h-275 p-6!">
        {" "}
        <div className=" relative">
          <img src={BannerImage} alt="banner" className="rounded-2xl w-273" />
          <div className="rounded-3xl absolute top-3/4 left-1/2 -translate-x-1/2 bg-[#FFFFFF]  w-213 h-135 ">
            <div className="  py-5! mt-0! flex px-12! bg-[#F9FAFB] rounded-tl-3xl rounded-tr-3xl ">
              <div style={{ flex: 1 }}>
                <span className="bg-[#C8E6C9] font-medium text-sm rounded-xl  px-3! py-2! text-[#27682A] border border-[#81C784] w-52 h-7!">
                  {englishSelected
                    ? "500 Pledges Taken Today"
                    : "आज तक 500 प्रतिज्ञाएँ ली गईं"}
                </span>
                <h3 className="pledge-title mt-3!">
                  {englishSelected
                    ? "Nasha Mukt Bharat Abhiyaan Pledge "
                    : "नशा मुक्त भारत अभियान प्रतिज्ञा"}
                </h3>
              </div>
              <div className="flex gap-3! items-center">
                <button
                  className={`${englishSelected ? "lang-btn primary" : "lang-btn"}`}
                  onClick={() => {
                    setEnglishSelected(true);
                    navigate("/epledge");
                  }}
                >
                  English
                </button>
                <button
                  className={`${!englishSelected ? "lang-btn primary" : "lang-btn"}`}
                  onClick={() => {
                    setEnglishSelected(false);
                  }}
                >
                  हिंदी
                </button>
              </div>
            </div>

            <div className="w-213 h-118 rounded-lg p-6! gap-8! flex flex-col ">
              <div className="w-201 h-76 border border-[#FFC97F]  rounded-lg p-5! gap-2! bg-[#FFF4E5]">
                {englishSelected ? (
                  <p className="text-[16px] text-[#704518] font-regular italic">
                    <b>Dear friends, </b>
                    <br /> <br />
                    Youth is the energy of any nation and the power of youth has
                    an important contribution in the development of society and
                    country. Therefore, it is very important that maximum number
                    of youth join the drug free India campaign. Accepting this
                    challenge of the country, today we unite under the Nasha
                    Mukt Bharat Abhiyaan and take a pledge that not only the
                    community, family, friends, but also ourselves will be drug
                    free because change should start with ourselves. So let us
                    all together take a firm decision to make our
                    district/state…..(name) drug-free. I pledge that I will do
                    everything possible to the best of my ability to make my
                    country drug-free.
                    <br />
                    <br />
                    <b>Jai Hind!</b>
                  </p>
                ) : (
                  <p>
                    {" "}
                    प्रिय साथियों,
                    <br />
                    <br />
                    युवा किसी भी राष्ट्र की ऊर्जा होते हैं तथा युवाओं की शक्ति
                    का समाज एवं देश के विकास में महत्वपूर्ण योगदान है। अतः यह
                    अति आवश्यक है कि नशामुक्त भारत अभियान में सर्वाधिक संख्या
                    में युवा जुड़े। देश की इस चुनौती को स्वीकार करते हुए हम आज
                    नशामुक्त भारत अभियान के अंतर्गत एक जुट होकर प्रतिज्ञा करते
                    हैं कि न केवल समुदाय, परिवार, मित्र, बल्कि स्वयं को भी
                    नशामुक्त कराएँगे क्योंकि बदलाव की शुरुआत अपने आप से होनी
                    चाहिए। इसलिए आइए हम सब मिलकर अपने ज़िले/ राज्य…..(नाम) को
                    नशामुक्त कराने का दृढ निश्चय करें। मैं प्रतिज्ञा करता हूँ कि
                    अपने देश को नशामुक्त करने के लिए अपनी क्षमता के अनुसार हर
                    सम्भव प्रयास करूँगा। जय हिन्द!
                    <br />
                    <br />
                    <b>जय हिन्द!</b>
                  </p>
                )}
              </div>
              <div className="h-22! w-201 flex flex-col justify-center items-center gap-4! p-10!">
                <button
                  onClick={() => navigate("/epledge/form")}
                  className="bg-[#003366] text-[14px] font-medium text-[#FFFFFF] gap-2! pt-2! pr-6! pb-2! pl-6! rounded-lg items-center cursor-pointer border w-100 h-10!"
                >
                  {englishSelected
                    ? "I Take this Pledge  →"
                    : "मैं शपथ लेता हूँ/लेती हूँ  →"}
                </button>
                <div className=" gap-1! h-6! w-101.5! flex items-center justify-center text-center">
                  <div className="text-[#6B7280] text-[14px] font-normal">
                    {englishSelected
                      ? "Taken the pledge before?"
                      : "क्या आपने पहले शपथ ली है?"}
                  </div>
                  <div className="text-[#003366] text-[14px] font-medium">
                    <div
                      className="pledge-download cursor-pointer transition"
                      onClick={() => navigate("/retrieve-certificate")}
                    >
                      {englishSelected
                        ? "Download your certificate directly."
                        : "अपने प्रमाणपत्र को सीधे डाउनलोड करें।"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPledgeOathEN;
