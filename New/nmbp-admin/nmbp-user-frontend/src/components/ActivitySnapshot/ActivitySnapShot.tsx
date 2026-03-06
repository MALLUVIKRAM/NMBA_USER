import React from "react";
import { useNavigate } from "react-router-dom";
import awareness_rally from "../../assets/awareness_rally.svg";
import panchayat_sabha from "../../assets/panchayat_sabha.svg";
import school_programme from "../../assets/school_programme.svg";
import forward_arrow from "../../assets/forward_arrow.svg";
import map_icon from "../../assets/map_icon.svg";
import calendar_icon from "../../assets/calendar_icon.svg";
import dashboard_map from "../../assets/dashboard_map.svg";
import "./ActivitySnapShot.css";

const ActivitySnapShot: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className=" max-w-300 min-h-[1235.53px]">
      <div className="p-0!">
        <div className="gap-6! flex justify-between h-18! w-5xl! m-5!">
          <div>
            <h2 className=" text-[32px] font-medium text-[#374151]">
              Activity Snapshots
            </h2>
            <p className="text-[#6B7280] font-regular text-sm mt-0!">
              NMBA activities conducted across States and Districts.
            </p>
          </div>
          <div className="flex justify-end mt-4! mb-4!">
            <div className="flex flex-wrap gap-4! items-center">
              <select className="border border-[#E5E7EB] rounded-lg pt-2! pb-2! pr-2! pl-4! gap-xs! text-base bg-[#FFFFFF] text-[#374151] focus:outline-none h-10 min-w-35">
                <option>All States</option>
              </select>
              <select className="border border-[#E5E7EB] rounded-lg pt-2! pb-2! pr-2! pl-4! gap-xs! text-base bg-[#FFFFFF] text-[#374151] focus:outline-none h-10 min-w-35">
                <option>All Districts</option>
              </select>
              <select className="border border-[#E5E7EB] rounded-lg pt-2! pb-2! pr-2! pl-4! gap-xs! text-base bg-[#FFFFFF] text-[#374151] focus:outline-none h-10 min-w-40">
                <option>All Activity Types</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4!">
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer "
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={awareness_rally}
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
              <p>
                Student rally conducted at Dnyanraj Education Society Alandi
                covering 5km route. 200 students participated with banners.
              </p>
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={school_programme}
              alt="School Programme"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="p-4! flex flex-col flex-1 gap-3!">
              <p className="bg-[#C8E6C9] text-[#27682A] font-medium text-xs rounded-xl px-3! py-1! border border-[#81C784] justify-center w-fit ">
                Pledge Ceremony
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Government School Pledge
              </h4>
              <p>
                Mass pledge taking ceremony organized at Government School.
                Students and faculty members participated in the oath-taking
                against drug usage.
              </p>
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={panchayat_sabha}
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
              <p>
                Community meeting held to discuss local rehabilitation support
                systems. Village elders and youth volunteers identified key
                areas for awareness drives.
              </p>
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={awareness_rally}
              alt="AwarenessRally"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Counselling Session
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Hope Haven Counselling
              </h4>
              <p>
                One-on-one support at a certified 'Hope Haven' centre.
                Individual counselling provided at verified IRCA facility.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Delhi, New Delhi
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={school_programme}
              alt="School Programme"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Community Outreach
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Rehabilitation Assistance
              </h4>
              <p>
                Focused on connecting with vulnerable populations, providing
                resources, and promoting NMBA's mission in Nashik.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Nashik, Maharashtra
                  </span>
                </div>
                <div className="flex items-center text-xs text-[#6B7280] gap-2 mb-1">
                  <img
                    src={calendar_icon}
                    alt="Calendar Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    26 Jan 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={panchayat_sabha}
              alt="Panchayat Sabha"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Awareness Campaign
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Empowerment Drive
              </h4>
              <p>
                Raising awareness about NMBA initiatives through informative
                sessions and distributing educational materials.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Bhopal, Madhya Pradesh
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={awareness_rally}
              alt="AwarenessRally"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Vocational Training
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                District Awareness Workshop
              </h4>
              <p>
                Empowering individuals with skills for sustainable livelihoods
                through specialized vocational training programs.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Thane, Maharashtra
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={school_programme}
              alt="School Programme"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Skill Development
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Skills Training Initiative
              </h4>
              <p>
                Equipping individuals with market-relevant skills through
                comprehensive skill development programs.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Jabalpur, Madhya Pradesh
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
          <div
            className="bg-white rounded-lg shadow border border-[#E5EAF2] flex flex-col gap-3! opacity-100 cursor-pointer"
            onClick={() => navigate("/ActivityDetails")}
          >
            <img
              src={panchayat_sabha}
              alt="Panchayat Sabha"
              className="rounded-t-lg w-full object-cover h-[196.18px]"
            />
            <div className="flex flex-col flex-1 p-4! gap-3!">
              <p className=" border border-[#7AAFF8] text-[#1558B0] bg-[#D2E3FC] text-[11px] font-medium  pt-0.5! pb-0.5! pr-2! pl-2! gap-0.5! rounded-xl mb-2 radius-md w-fit">
                Support Group Meeting
              </p>
              <h4 className="text-base font-medium text-[#374151] mb-1!">
                Community Support Program
              </h4>
              <p>
                Providing a safe space for individuals to share experiences,
                offer support, and build a sense of community.
              </p>
              <hr className="w-full border-t border-[#E5E7EB] mb-1!" />
              <div className="flex justify-between">
                <div className="flex items-center text-xs text-[#6B7280] gap-1! mb-1">
                  <img
                    src={map_icon}
                    alt="Map Icon"
                    className="w-4! h-4! justify-center"
                  />
                  <span className="text-[11px] text-[#6B7280] font-medium">
                    Udaipur, Rajasthan
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
        </div>
        {/* Pagination and items-per-page section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6! mb-4! gap-3!">
          <div className="flex items-center gap-1!">
            <button
              className="px-2! py-1! rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-100"
              aria-label="Previous page"
            >
              &lt;
            </button>
            <button className="px-3! py-1! rounded border border-blue-600 text-blue-600 font-semibold bg-blue-50">
              1
            </button>
            <button className="px-3! py-1! rounded border border-gray-300 text-gray-700 bg-white">
              2
            </button>
            <button className="px-3! py-1! rounded border border-gray-300 text-gray-700 bg-white">
              3
            </button>
            <span className="px-2!">...</span>
            <button className="px-3! py-1! rounded border border-gray-300 text-gray-700 bg-white">
              60
            </button>
            <button
              className="px-2! py-1! rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-100"
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
          <div className="flex items-center gap-2! text-sm text-gray-600">
            <span>Showing</span>
            <select className="border border-gray-300 rounded px-2! py-1! bg-white focus:outline-none">
              <option>9</option>
              <option>18</option>
              <option>27</option>
            </select>
            <span>of</span>
            <span className="font-semibold">150</span>
            <span>items</span>
          </div>
        </div>
        <div className="mt-7">
          <div className="bg-[#E8F0FE] rounded-3xl flex md:flex-row  items-center gap-3! w-273! h-75!">
            <div className="flex flex-col items-left gap-4! p-10! w-136.5 h-64!">
              <div>
                <h3 className="font-medium text-[#003366] text-[24px]">
                  Find De-addiction Facilities Near You
                </h3>
                <p className="text-[#6B7280] text-[16px] font-regular mt-2!">
                  Locate verified Integrated Rehabilitation Centres (IRCA),
                  Outreach Centres (ODIC), and Addiction Treatment Facilities
                  (ATF) in your district.
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
      </div>
    </div>
  );
};

export default ActivitySnapShot;
