import React from "react";
import activity_image from "../../assets/Activity_image.svg";
import dashboard_map from "../../assets/dashboard_map.svg";
import map_icon from "../../assets/map_icon.svg";
import calendar_icon from "../../assets/calendar_icon.svg";

const ActivityDetails = () => {
  return (
    <div className="bg-[#f7fafd] min-h-screen pb-8!">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 px-8! pt-8!">
        <span className="hover:underline cursor-pointer">NMBA</span>
        <span className="mx-2!">{"/"}</span>
        <span className="hover:underline cursor-pointer">
          Activity Snapshot
        </span>
        <span className="mx-2!">{"/"}</span>
        <span className="text-gray-700 font-medium">
          Mass Awareness Rally at Dnyanraj Education Society
        </span>
      </div>

      {/* Title & Tag */}
      <div className="px-8! pt-4!">
        <div className="flex items-center gap-2 mb-2!">
          <p className="inline-block px-2! py-1! border border-[#1763C6] text-[#1763C6] bg-blue-50 text-xs font-medium  pr-sm! pl-sm! rounded-[1vw] mb-2 radius-md w-fit text-center tracking-[0.1px]">
            Awareness Rally
          </p>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2!">
          Mass Awareness Rally at Dnyanraj Education Society
        </h1>
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <span>
            <img
              src={map_icon}
              alt="Location"
              className="inline-block w-4 h-4 mr-1"
            />
            Pune, Maharashtra
          </span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>
            <img
              src={calendar_icon}
              alt="Date"
              className="inline-block w-4 h-4 mr-1"
            />
            25 Jan 2026
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="px-8! mt-4! flex flex-col items-stretch">
        <div className="bg-white rounded-2xl shadow p-6! flex flex-col gap-6">
          {/* Image and Carousel */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl h-85 rounded-xl overflow-hidden mb-4!">
              <img
                src={activity_image}
                alt="Activity"
                className="w-full h-full gap-4! object-cover"
              />
            </div>
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#1a73e8] rounded-full inline-block"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full inline-block"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full inline-block"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full inline-block"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full inline-block"></span>
            </div>
          </div>

          {/* About and Details */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* About the Activity */}
            <div className="flex flex-col rounded-xl gap-4! p-4! w-full lg:w-2/3 bg-[#f9fafb]">
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-800 mb-2! tracking-wide">
                  ABOUT THE ACTIVITY
                </h2>
                <p className="text-gray-700 text-sm mb-2!">
                  A mass awareness rally was organised by Dnyanraj Education
                  Society in Alandi, Pune to mark Republic Day. The primary
                  objective was to sensitise the youth about the detrimental
                  effects of substance abuse.
                </p>
                <p className="text-gray-700 text-sm">
                  Over 250 students marched through the town centre holding
                  placards. The event concluded with a pledge administration
                  ceremony led by the District Collector.
                </p>
              </div>
              <div className="flex-1 ">
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Participants Count</span>
                  <span className="font-semibold text-blue-700">250</span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Target Audience</span>
                  <span className="font-semibold text-blue-700">
                    Youth & Students
                  </span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Venue Type</span>
                  <span className="font-semibold text-blue-700">
                    Public / Educational Inst.
                  </span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Organised By</span>
                  <span className="font-semibold text-blue-700">
                    Dnyanraj Education Society
                  </span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Chief Guest</span>
                  <span className="font-semibold text-gray-800">
                    SDM Una, Sh. Vishwa Mohan Chauhan
                  </span>
                </div>
              </div>
            </div>

            {/* Details Table & Map */}
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              {/* Details Table */}

              {/* Map & Dates */}
              <div className="flex-1">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-4!">
                  <img
                    src={dashboard_map}
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">State</span>
                  <span className="font-semibold text-gray-800">
                    Maharashtra
                  </span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">District</span>
                  <span className="font-semibold text-gray-800">Pune</span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Town</span>
                  <span className="font-semibold text-gray-800">Alandi</span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Activity Date</span>
                  <span className="font-semibold text-gray-800">
                    25 Jan 2026
                  </span>
                </div>
                <div className="mb-2! flex justify-between text-sm">
                  <span className="text-gray-500">Submitted On</span>
                  <span className="font-semibold text-gray-800">
                    26 Jan 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
