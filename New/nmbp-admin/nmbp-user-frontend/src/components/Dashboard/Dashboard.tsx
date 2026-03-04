import panchayatSabha from "../../assets/panchayat_sabha.svg";
import schoolProgramme from "../../assets/school_programme.svg";
import awarenessRally from "../../assets/awareness_rally.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import eduLogo from "../../assets/edu_logo.svg";
import communityLogo from "../../assets/community_logo.svg";
import governanceLogo from "../../assets/governance_logo.svg";
import targetLogo from "../../assets/target_logo.svg";
import arrow_right_icon from "../../assets/arrow_right_icon.svg";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handlePledgeClick = () => {
    navigate("/epledge");
  };
  return (
    <div className="bg-[--bg] text-[#1f2937] p-6! w-full min-w-0 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-r from-[#15784C] to-[#198754] rounded-xl shadow p-6! mb-6!">
        <div className="mb-4! md:mb-0!">
          <h1 className="text-[32px] font-medium m-0! text-white">
            Nasha Mukt Bharat Abhiyaan
          </h1>
          <p className="m-0! text-white">
            Join 98 Lakh+ citizens committed to a drug-free society.
          </p>
        </div>
        <div>
          <button
            className="bg-white text-[#003366] text-sm rounded-lg px-6! py-2! font-medium justify-center flex gap-2! cursor-pointer"
            onClick={handlePledgeClick}
          >
            Take the Pledge{" "}
            <img
              src={arrow_right_icon}
              alt="arrow"
              className="inline-block ml-2!"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6!">
        <div>
          <h2 className="text-[#374151] font-medium m-0! text-[28px]">
            Dashboard
          </h2>
          <p className="text-[#6B7280] text-[16px] font-regular m-0!">
            Live impact metrics verified from field reports across 372 districts
          </p>
        </div>
        <div className="flex  lg:justify-end gap-3! mt-3! md:mt-0!">
          <select className="border border-gray-300 rounded-md px-3! py-2! text-xs sm:text-sm bg-white w-29.5 h-10!">
            <option>All States</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3! py-2! text-xs sm:text-sm bg-white w-29.5 h-10!">
            <option>All Districts</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5! gap-y-5! mb-8 ">
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">Total Pledges</p>
          <p className="text-[#374151] font-semibold text-3xl">22,75,906</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">People Reached</p>
          <p className="text-[#374151] font-semibold text-3xl">25,89,78,572</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">Youth Reached</p>
          <p className="text-[#374151] font-semibold text-3xl">9,33,63,189</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">Women Reached</p>
          <p className="text-[#374151] font-semibold text-3xl">6,36,83,454</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">
            Total Activities Conducted
          </p>
          <p className="text-[#374151] font-semibold text-3xl">8,16,100</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">Villages Covered</p>
          <p className="text-[#374151] font-semibold text-3xl">3,79,707</p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg pt-6! pr-5! pb-6! pl-5! gap-1! flex flex-col justify-center items-start shadow border border-[#C8DBF0]">
          <p className="text-gray-500 text-sm font-medium">
            Educational Institutions Covered
          </p>
          <p className="text-[#374151] font-semibold text-3xl">16,09,943</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-8! mb-4!">
        NUMBER OF PROGRAMMES
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8!">
        <article className="bg-[#F8FAFC] shadow-sm border border-[#E5EAF2] flex flex-col p-8! gap-4! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-4!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-green-50 ">
              <img
                src={eduLogo}
                alt="Educational Institutions Logo"
                className="w-9 h-9 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Educational Institutions
            </span>
          </div>
          <hr className="w-full border-t border-[#E5EAF2] mb-4!" />
          <div className="grid grid-cols-2 gap-x-8! gap-y-2!">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                School/College/University Programme
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                20,503
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Schools/Colleges/Universities Reached
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                47,131
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Visit To Institutions
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                681
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Youth Reached Out
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                77,687
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Youth Club/Yuva Mandal Programme
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                5,705
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Training Conducted
              </span>
              <span className="font-semibold text-[#1558B0] text-[28px]">
                1,461
              </span>
            </div>
          </div>
        </article>
        <article className="bg-[#F8FAFC] shadow-sm border border-[#E5EAF2] flex flex-col p-8! gap-4! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-4!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-green-50 ">
              <img
                src={communityLogo}
                alt="Community Logo"
                className="w-9 h-9 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Community Outreach
            </span>
          </div>
          <hr className="w-full border-t border-[#E5EAF2] mb-4!" />
          <div className="grid grid-cols-2 gap-x-8! gap-y-2!">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Awareness Rally/Morcha/Run
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                9,019
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Community Awareness Session
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                58,851
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Community Programmes
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                53,541
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Media Campaign
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                7,901
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Theme Based Events Organised
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                4,448
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                IEC Material Developed
              </span>
              <span className="font-semibold text-[#27682A] text-[28px]">
                4,116
              </span>
            </div>
          </div>
        </article>
        <article className="bg-[#F8FAFC] shadow-sm border border-[#E5EAF2] flex flex-col p-8! gap-4! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-4!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-yellow-50 ">
              <img
                src={governanceLogo}
                alt="Governance Logo"
                className="w-9 h-9 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Governance & Local Bodies
            </span>
          </div>
          <hr className="w-full border-t border-[#E5EAF2] mb-4" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                District Level Committee Meeting
              </span>
              <span className="font-semibold text-[#A66A26] text-[28px]">
                898
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Panchayat/Gram Sabha
              </span>
              <span className="font-semibold text-[#B45309] text-[28px]">
                31,864
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Villages Covered
              </span>
              <span className="font-semibold text-[#B45309] text-[28px]">
                39,296
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                State/District Level Event
              </span>
              <span className="font-semibold text-[#B45309] text-[28px]">
                4,602
              </span>
            </div>
          </div>
        </article>
        <article className="bg-[#F8FAFC] shadow-sm border border-[#E5EAF2] flex flex-col p-8! gap-4! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-4!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-red-50 ">
              <img
                src={targetLogo}
                alt="Targeted Interventions Logo"
                className="w-9 h-9 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Targeted Interventions
            </span>
          </div>
          <hr className="w-full border-t border-[#E5EAF2] mb-4" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Women Group/Women SHG/Mahila Mandal Programme
              </span>
              <span className="font-semibold text-[#D64539] text-[28px]">
                9,515
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                At Risk/Vulnerable People Identified/Referrals/Counselling
              </span>
              <span className="font-semibold text-[#DC2626] text-[28px]">
                10,885
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Women Reached Out
              </span>
              <span className="font-semibold text-[#DC2626] text-[28px]">
                39,088
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Hotspot Identification
              </span>
              <span className="font-semibold text-[#DC2626] text-[28px]">
                2,974
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#6B7280]">
                Intelligence Shared On Supply Of Substance
              </span>
              <span className="font-semibold text-[#DC2626] text-[28px]">
                1,840
              </span>
            </div>
          </div>
        </article>
      </section>
      {/* Recent Activities Across India Section */}
      <h3 className="text-lg font-semibold mt-8! mb-4!">
        RECENT ACTIVITIES ACROSS INDIA
      </h3>
      <div className="flex justify-between items-center mb-4!">
        <span></span>
        <a
          href="#"
          className="text-[#1763C6] text-sm font-medium hover:underline"
        >
          View all Activities
        </a>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4! mb-8!">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100">
          <img
            src={awarenessRally}
            alt="AwarenessRally"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="flex flex-col flex-1 p-3!">
            <p className="inline-block px-2! py-1! border border-[#1763C6] text-[#1763C6] bg-blue-50 text-xs font-medium  pr-sm! pl-sm! rounded-[1vw] mb-2 radius-md w-fit text-center tracking-[0.1px]">
              Awareness Rally
            </p>
            <h4 className="text-base font-semibold text-[#1A2C47] mb-1">
              Alandi Student Awareness Drive
            </h4>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <div className="flex justify-between">
              <div className="flex items-center text-xs text-[#6B7280] gap-2 mb-1">
                <span>Maharashtra</span>
              </div>
              <p className="text-xs text-[#6B7280]">20 Jan 2025</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100">
          <img
            src={schoolProgramme}
            alt="School Programme"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="p-4! flex flex-col flex-1">
            <p className=" border border-[ #81C784] bg-[#F1F5F9] text-[#22C55E] text-xs font-semibold px-2! py-1! rounded-[1vw] mb-2 radius-md w-fit text-center tracking-[0.1px]">
              School Programme
            </p>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <h4 className="text-base font-semibold text-[#1A2C47] mb-1">
              Government School Pledge{" "}
            </h4>
            <div className="flex flex-rowitems-center text-xs text-[#6B7280] gap-2 mb-1">
              <span>Indore, Madhya Pradesh</span>
            </div>
            <p className="text-xs text-[#6B7280]">20 Jan 2025</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100">
          <img
            src={panchayatSabha}
            alt="Panchayat Sabha"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="p-4! flex flex-col flex-1">
            <p className=" px-2! py-1! border border-[#1763C6] bg-[#F1F5F9] text-[#1763C6] text-xs font-semibold pt-xxs pb-xxs pr-sm pl-sm rounded-[1vw] mb-2 radius-md w-fit text-center tracking-[0.1px]">
              Panchayat Sabha
            </p>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <h4 className="text-base font-semibold text-[#1A2C47] mb-1!">
              Village Meeting
            </h4>
            <div className="flex items-center text-xs text-[#6B7280] gap-2! mb-1!">
              <span>Sirc, Karnataka</span>
            </div>
            <p className="text-xs text-[#6B7280]">20 Jan 2025</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#123c6a] text-white text-center py-4! mt-8! rounded-lg">
        © 2025 Government of India
      </footer>
    </div>
  );
};

export default Dashboard;
