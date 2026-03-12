import panchayatSabha from "../../assets/panchayat_sabha.svg";
import schoolProgramme from "../../assets/school_programme.svg";
import awarenessRally from "../../assets/awareness_rally.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import eduation_icon from "../../assets/education_icon.svg";
import campaign_icon from "../../assets/campaign_icon.svg";
import goverance_icon from "../../assets/goverance_icon.svg";
import target_icon from "../../assets/target_icon1.svg";
import arrow_right_icon from "../../assets/arrow_right_icon.svg";
import map_icon from "../../assets/map_icon.svg";
import calendar_icon from "../../assets/calendar_icon.svg";
import forward_arrow from "../../assets/forward_arrow.svg";
import dashboard_map from "../../assets/dashboard_map.svg";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handlePledgeClick = () => {
    navigate("/epledge");
  };
  return (
    <div className="bg-[--bg] text-[#1f2937] p-6! gap-12! w-full min-w-0 min-h-screen ">
      <div className="flex flex-col md:flex-row items-center justify-between bg-linear-to-r from-[#198754] to-[#15784C] rounded-[20px] shadow w-273! h-34! pt-8! pb-8! pr-10! pl-10! border mb-6! border-[#E5E7EB]">
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
      <div className="gap-3! flex justify-between ">
        <h3 className="text-[16px] font-semibold mt-8! mb-4! text-[#374151] ">
          NUMBER OF PROGRAMMES
        </h3>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8!">
        <article className="bg-[#FFFFFF] shadow-sm border border-[#E5E7EB] flex flex-col p-5! gap-4! rounded-xl opacity-100 w-133.5! h-80.5! ">
          <div className="flex items-center gap-2! mb-1!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#E8F0FE] rounded-sm! ">
              <img
                src={eduation_icon}
                alt="Educational & Youth Logo"
                className="w-5 h-5 object-contain "
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Education & Youth
            </span>
          </div>
          <hr className="w-full border-t border-[#E5E7EB] mb-4!" />
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
        <article className="bg-[#FFFFFF] shadow-sm border border-[#E5E7EB] flex flex-col p-5! gap-4! rounded-2xl opacity-100 w-133.5! h-80.5!">
          <div className="flex items-center gap-2! mb-1!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#E8F5E9] rounded-sm! ">
              <img
                src={campaign_icon}
                alt="Community Outreach Logo"
                className="w-5 h-5 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Community Outreach
            </span>
          </div>
          <hr className="w-full border-t border-[#E5E7EB] mb-4!" />
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
        <article className="bg-[#FFFFFF] shadow-sm border border-[#E5E7EB] flex flex-col p-5! gap-4! w-133.5! h-80.5! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-1!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#FFF4E5] rounded-sm! ">
              <img
                src={goverance_icon}
                alt="Governance Logo"
                className="w-5 h-5 object-contain"
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Governance & Local Bodies
            </span>
          </div>
          <hr className="w-full border-t border-[#E5E7EB] mb-4" />
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
        <article className="bg-[#FFFFFF] shadow-sm border border-[#E5E7EB] flex flex-col p-5! gap-4! w-133.5! h-80.5! rounded-2xl opacity-100">
          <div className="flex items-center gap-2! mb-1!">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-[#FDECEA] rounded-sm! ">
              <img
                src={target_icon}
                alt="Targeted Interventions Logo"
                className="w-5 h-5 object-contain rounded-sm! "
              />
            </span>
            <span className="text-lg font-semibold text-[#1A2C47]">
              Targeted Interventions
            </span>
          </div>
          <hr className="w-full border-t border-[#E5E7EB] mb-4" />
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
      <div className="flex justify-between items-center mb-0 gap-4! w-5xl ">
        <h3 className="text-lg font-semibold mt-8! mb-4!">
          RECENT ACTIVITIES ACROSS INDIA
        </h3>

        <hr className="flex-1 border-t border-[#E5E7EB]" />

        <a
          href="#"
          className="text-[#1763C6] text-sm font-medium hover:underline cursor-pointer flex gap-3! justify-center"
        >
          View all Activities <img src={arrow_right_icon} alt="arrow" />
        </a>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4! mb-8!">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer">
          <img
            src={awarenessRally}
            alt="AwarenessRally"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="flex flex-col flex-1 p-4! gap-3!">
            <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
              Awareness Rally
            </p>
            <h4 className="text-base font-medium text-[#374151] mb-1!">
              Alandi Student Awareness Drive
            </h4>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <div className="flex justify-between">
              <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                <img
                  src={map_icon}
                  alt="Map Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  Pune,Maharashtra
                </span>
              </div>
              <div className="flex items-center text-xs text-[#6B7280] gap-2 mb-1">
                <img
                  src={calendar_icon}
                  alt="Calendar Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  20 Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer">
          <img
            src={schoolProgramme}
            alt="School Programme"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="p-4! flex flex-col flex-1 gap-3!">
            <p className="bg-[#C8E6C9] text-[#27682A] font-medium text-xs rounded-xl px-3! py-1! border border-[#81C784] justify-center w-fit ">
              School Programme
            </p>
            <h4 className="text-base font-medium text-[#374151] mb-1!">
              Government School Pledge
            </h4>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <div className="flex justify-between">
              <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                <img
                  src={map_icon}
                  alt="Map Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  Indore,Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center text-xs text-[#6B7280] gap-2 mb-1">
                <img
                  src={calendar_icon}
                  alt="Calendar Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  24 Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer">
          <img
            src={panchayatSabha}
            alt="Panchayat Sabha"
            className="rounded-t-lg w-full object-cover h-[196.18px]"
          />
          <div className="p-4! flex flex-col flex-1 gap-3!">
            <p className=" px-2! py-1! border border-[#7AAFF8] bg-[#D2E3FC] text-[#1558B0] text-xs font-semibold pt-xxs pb-xxs pr-sm pl-sm  mb-2 radius-md w-fit text-center rounded-xl">
              Panchayat Sabha
            </p>
            <h4 className="text-base font-medium text-[#374151] mb-1!">
              Village Meeting
            </h4>
            <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
            <div className="flex justify-between">
              <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                <img
                  src={map_icon}
                  alt="Map Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  Sikar, Rajasthan
                </span>
              </div>
              <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                <img
                  src={calendar_icon}
                  alt="Calendar Icon"
                  className="w-4! h-4! justify-center"
                />
                <span className="text-[11px] text-[#6B7280] font-medium">
                  20 Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#E8F0FE] rounded-3xl flex md:flex-row  items-center gap-3! w-273! h-75!">
        <div className="flex flex-col items-left gap-4! p-10! w-136.5 h-64!">
          <div>
            <h3 className="font-medium text-[#003366] text-[24px]">
              Find De-addiction Facilities Near You
            </h3>
            <p className="text-[#6B7280] text-[16px] font-regular mt-2!">
              Locate verified Integrated Rehabilitation Centres (IRCA), Outreach
              Centres (ODIC), and Addiction Treatment Facilities (ATF) in your
              district.
            </p>
          </div>
          <button className="bg-[#003366] text-[14px] font-medium text-[#FFFFFF] gap-2! pt-2! pr-4! pb-2! pl-6! rounded-lg flex items-center cursor-pointer border w-45 h-10!">
            View Facility Map
            <img
              src={forward_arrow}
              alt="arrow"
              className="inline-block  w-4! h-4!"
            />
          </button>
        </div>
        <img
          src={dashboard_map}
          alt="map"
          className="w-136.5 h-75! rounded-tr-3xl rounded-br-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default Dashboard;
