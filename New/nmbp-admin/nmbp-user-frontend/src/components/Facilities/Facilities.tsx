import React from "react";
import dashboard_map from "../../assets/dashboard_map.svg";
import map_icon from "../../assets/map_icon.svg";
import mail_icon1 from "../../assets/mail_icon1.svg";
import website_icon from "../../assets/website_icon.svg";
import near_me_icon from "../../assets/near_me_icon.svg";
import direction_icon from "../../assets/direction_icon.svg";
import call_icon1 from "../../assets/call_icon1.svg";

const Facilities: React.FC = () => {
  return (
    <div className="bg-blue-600">
      <div className="px-6! py-6! bg-red-700">
        <div className="b-t! gap-6! p-6!">
          <h1 className="text-[32px] font-semibold text-[#374151] mb-2!">
            Help Centres & Facilities
          </h1>
          <p className="text-[#6B7280] text-base mb-6!">
            Find de-addiction canters, counselling services, and support
            facilities across India
          </p>
        </div>

        <div className="flex flex-wrap gap-4! items-center b-t! border-[#E5E7EB] p-6! rotate-0!">
          <input
            type="text"
            placeholder=" Search by facility name, city, district, PIN or address"
            className="flex-1 w-3xl h-10! border border-[#E5E7EB] rounded-lg px-5! py-3! text-base focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#6B7280]"
          />
          <select className=" h-10! border border-[#E5E7EB] rounded-lg pb-2! pl-4! pt-2! pr-2! text-base text-[#374151] cursor-pointer justify-center">
            <option>All Facility Types</option>
          </select>
          <button className="h-10! flex items-center gap-2! bg-[#0A2C53] text-white pt-2! pb-2! pr-6! pl-4! rounded-lg font-medium text-sm cursor-pointer">
            <img
              src={near_me_icon}
              alt="Near Me Icon"
              className="inline-block"
            />
            Near Me
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 bg-[#F7FAFD]">
        {/* Map */}
        <div className="flex-1 bg-gray-200 overflow-hidden mt-6! gap-2!">
          {/* Placeholder for Google Map */}
          <img src={dashboard_map} className="w-full h-full object-cover" />
        </div>
        {/* Facilities List */}
        <div className="w-lg h-11/12! mt-6! bg-[#FFFFFF]">
          <div className="mb-4! ">
            <span className="text-[#212529] font-semibold text-lg gap-2! pt-4! pb-4! pl-6! pr-6!  ">
              Facilities (3)
            </span>
          </div>
          {/* Facility Card 1 */}
          <div className="border-t-0! border-[#E5E7EB]  bg-white p-5! mb-5! w-full h-auto">
            <div className="flex gap-3! mb-2!">
              <span className="bg-[#C8E6C9] text-[#27682A] font-medium text-xs rounded-xl px-3! py-1! border border-[#217A39] justify-center ">
                De Addiction Center
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] font-light text-xs rounded-xl px-3! py-1! border border-[#D1D5DB] justify-center">
                24x7
              </span>
            </div>
            <div className="font-semibold text-base leading-4! tracking-wider text-[#374151] mb-1!">
              National Institute of Mental Health and Neuro Sciences (NIMHANS)
            </div>
            <div className="flex items-center text-[#6B7280] text-sm mb-1! gap-2!">
              <img src={map_icon} alt="Map Icon" className="inline-block" />
              Hosur Road, Bangalore - 560029
              <span className="mx-2! text-[#6B7280] font-normal text-14px">
                •
              </span>
              1.5 KM
            </div>
            <div className="flex items-center text-[#6B7280] text-sm mb-1! gap-2!">
              <img src={mail_icon1} alt="Mail Icon" className="inline-block" />
              info@nimhans.ac.in
            </div>
            <div className="flex items-center text-[#6B7280] text-sm mb-3! gap-2!">
              <img
                src={website_icon}
                alt="Website Icon"
                className="inline-block"
              />
              <a
                href="https://www.nimhans.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://www.nimhans.ac.in
              </a>
            </div>
            <div className="flex flex-row gap-2! mb-4! border-t-0!">
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Inpatient Treatment
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Outpatient Counseling
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Detoxification
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Rehabilitation
              </span>
            </div>
            <hr className="border-gray-200 mb-4!" />
            <div className="flex gap-4!">
              <button className="flex-1 bg-[#0A2C53] text-[#FFFFFF] rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8! font-medium text-xs cursor-pointer">
                <img
                  src={direction_icon}
                  alt="Direction Icon"
                  className="w-5.5! h-5.5! inline-block mr-2! pb-0.5!"
                />
                Get Directions
              </button>
              <button className="flex-1 border border-[#003366] text-[#0A2C53] bg-white rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8! font-medium text-xs cursor-pointer">
                <img
                  src={call_icon1}
                  alt="Call Icon"
                  className="w-4! h-4! inline-block mr-2! pb-0.5!"
                />
                Call Now
              </button>
            </div>
          </div>
          {/* Facility Card 2 */}
          <div className="border-b-0! border-gray-300 bg-white p-5! mb-5!">
            <div className="flex gap-2! mb-2!">
              <span className="bg-[#D2E3FC] text-[#1558B0] font-medium text-xs rounded-xl px-3! py-1! border border-[#7AAFF8] justify-center ">
                Hospital
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] font-light text-xs rounded-xl px-3! py-1! border border-[#D1D5DB] justify-center">
                Mon-Sat: 8 AM - 5 PM
              </span>
            </div>
            <div className="font-semibold text-base text-[#22223B] mb-1!">
              All India Institute of Medical Sciences (AIIMS)
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-1! gap-2!">
              <img src={map_icon} alt="Map Icon" className="inline-block" />
              Ansari Nagar, New Delhi - 110029
              <span className="mx-2!">•</span>
              1.5 KM
            </div>
            <div className="flex items-center text-[#6B7280] text-sm mb-3! gap-2!">
              <img
                src={website_icon}
                alt="Website Icon"
                className="inline-block"
              />
              <a
                href="https://www.aiims.edu/"
                target="_blank"
                className="underline"
              >
                https://www.aiims.edu/
              </a>
            </div>
            <div className="flex flex-wrap gap-2! mb-4!">
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                De-addiction Services
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Psychiatric Care
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Counseling
              </span>
            </div>
            <hr className="border-gray-200 mb-4!" />
            <div className="flex gap-3!">
              <button className="flex-1 bg-[#0A2C53] text-[#FFFFFF] rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8!  font-medium text-xs cursor-pointer">
                <img
                  src={direction_icon}
                  alt="Direction Icon"
                  className="w-5.5! h-5.5! inline-block mr-2! pb-0.5!"
                />
                Get Directions
              </button>
              <button className="flex-1 border border-[#003366] text-[#0A2C53] bg-white rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8! font-medium text-xs cursor-pointer">
                <img
                  src={call_icon1}
                  alt="Call Icon"
                  className="w-4! h-4! inline-block mr-2! pb-0.5!"
                />
                Call Now
              </button>
            </div>
          </div>
          {/* Facility Card 3 */}
          <div className="border-b-0! bg-white p-6! mb-5!">
            <div className="flex gap-2! mb-2!">
              <span className="bg-[#C8E6C9] text-[#27682A] font-medium text-xs rounded-xl px-3! py-1! border border-[#217A39] justify-center ">
                De Addiction Center
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] font-light text-xs rounded-xl px-3! py-1! border border-[#D1D5DB] justify-center">
                24x7
              </span>
            </div>
            <div className="font-semibold text-base text-[#22223B] mb-1!">
              Muktangan Rehabilitation Centre
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-1! gap-2!">
              <img src={map_icon} alt="Map Icon" className="inline-block" />
              Thane West, Mumbai - 400601
              <span className="mx-2!">•</span>
              1.5 KM
            </div>
            <div className="flex items-center text-gray-500 text-sm mb-3! gap-2!">
              <img
                src={mail_icon1}
                alt="Mail Icon"
                className="inline-block cursor-pointer"
              />
              muktangan@rehabilitation.org
            </div>
            <div className="flex flex-wrap gap-2! mb-4!">
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Residential Treatment
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Family Counseling
              </span>
              <span className="bg-[#F3F4F6] text-[#6B7280] text-xs rounded-md pt-0.5! pb-0.5! pr-2! pl-2! border border-[#D1D5DB] gap-2! justify-center">
                Aftercare Support
              </span>
            </div>
            <hr className="border-gray-200 mb-4!" />
            <div className="flex gap-3!">
              <button className="flex-1 bg-[#0A2C53] text-[#FFFFFF] rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8!  font-medium text-xs cursor-pointer">
                <img
                  src={direction_icon}
                  alt="Direction Icon"
                  className="w-5.5! h-5.5! inline-block mr-2! pb-0.5!"
                />
                Get Directions
              </button>
              <button className="flex-1 border border-[#003366] text-[#0A2C53] bg-white rounded-lg pt-2! pb-2! pr-4! pl-3! w-54.5 h-8! font-medium text-xs cursor-pointer">
                <img
                  src={call_icon1}
                  alt="Call Icon"
                  className="w-4! h-4! inline-block mr-2! pb-0.5!"
                />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
