import React from "react";
import { Link } from "react-router-dom";
import awarenessRallyImg from "../../assets/awareness_rally.svg";
import panchayatSabhaImg from "../../assets/panchayat_sabha.svg";
import schoolProgrammeImg from "../../assets/school_programme.svg";
import forward_arrow from "../../assets/forward_arrow.svg";

const activities = [
  {
    id: 1,
    tag: "Awareness Rally",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Alandi Student Awareness Drive",
    date: "25 Jan 2026",
    excerpt:
      "Student rally conducted at Dnyanraj Education Society Alandi covering 5km route. 200 students participated with banners.",
    location: "Pune, Maharashtra",
    image: awarenessRallyImg,
  },
  {
    id: 2,
    tag: "Pledge Ceremony",
    tagColor: "bg-green-100 text-green-700",
    title: "Government School Pledge",
    date: "24 Jan 2026",
    excerpt:
      "Mass pledge taking ceremony organized at Government School. Students and faculty members participated in the oath-taking against drug usage.",
    location: "Indore, Madhya Pradesh",
    image: schoolProgrammeImg,
  },
  {
    id: 3,
    tag: "Panchayat Sabha",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Village Meeting",
    date: "24 Jan 2026",
    excerpt:
      "Community meeting held to discuss local rehabilitation support systems. Village elders and youth volunteers identified key areas for awareness drives.",
    location: "Sikar, Rajasthan",
    image: panchayatSabhaImg,
  },
  {
    id: 4,
    tag: "Counselling Session",
    tagColor: "bg-gray-100 text-gray-700",
    title: "Hope Haven Counselling",
    date: "24 Jan 2026",
    excerpt:
      "One-on-one support at a certified 'Hope Haven' centre. Individual counselling provided at verified IRCA facility.",
    location: "Delhi, New Delhi",
    image: panchayatSabhaImg,
  },
  {
    id: 5,
    tag: "Community Outreach",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Rehabilitation Assistance",
    date: "25 Jan 2026",
    excerpt:
      "Focused on connecting with vulnerable populations, providing resources, and promoting NMBA's mission in Nashik.",
    location: "Nashik, Maharashtra",
    image: awarenessRallyImg,
  },
  {
    id: 6,
    tag: "Awareness Campaign",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Empowerment Drive",
    date: "24 Jan 2026",
    excerpt:
      "Raising awareness about NMBA initiatives through informative sessions and distributing educational materials.",
    location: "Bhopal, Madhya Pradesh",
    image: schoolProgrammeImg,
  },
  {
    id: 7,
    tag: "Vocational Training",
    tagColor: "bg-blue-100 text-blue-700",
    title: "District Awareness Workshop",
    date: "25 Jan 2026",
    excerpt:
      "Empowering individuals with skills for sustainable livelihoods through specialized vocational training programs.",
    location: "Thane, Maharashtra",
    image: awarenessRallyImg,
  },
  {
    id: 8,
    tag: "Skill Development",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Skills Training Initiative",
    date: "24 Jan 2026",
    excerpt:
      "Equipping individuals with market-relevant skills through comprehensive skill development programs.",
    location: "Jabalpur, Madhya Pradesh",
    image: schoolProgrammeImg,
  },
  {
    id: 9,
    tag: "Support Group Meeting",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Community Support Program",
    date: "24 Jan 2026",
    excerpt:
      "Providing a safe space for individuals to share experiences, offer support, and build a sense of community.",
    location: "Udaipur, Rajasthan",
    image: panchayatSabhaImg,
  },
];

const ActivitySnapShot: React.FC = () => {
  return (
    <div className="mx-auto w-273 min-h-[1235.53px]">
      <div className="p-6! md:p-7!">
        <div>
          <h2 className="m-0 text-xl font-semibold">Activity Snapshots</h2>
          <p className="text-gray-500 mt-1.5!">
            NMBA activities conducted across States and Districts.
          </p>
        </div>
        <div className="flex justify-end mt-4! mb-4!">
          <div className="flex flex-nowrap gap-4! items-center">
            <select className="border border-gray-300 rounded px-5! py-2! bg-white text-gray-700 focus:outline-none h-10 min-w-35">
              <option>All States</option>
            </select>
            <select className="border border-gray-300 rounded px-5! py-2! bg-white text-gray-700 focus:outline-none h-10 min-w-35">
              <option>All Districts</option>
            </select>
            <select className="border border-gray-300 rounded px-5! py-2! bg-white text-gray-700 focus:outline-none h-10 min-w-40">
              <option>All Activity Types</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4!">
          {activities.map((a) => (
            <Link
              key={a.id}
              to={`/activity/${a.id}`}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col transition hover:shadow-lg min-w-[320px] w-87 h-[409.18px]"
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${a.image})` }}
              />
              <div className="flex-1 flex flex-col px-6! pt-4! pb-4!">
                <span
                  className={`inline-block rounded-full mb-2! ${a.tagColor}`}
                  style={
                    a.tag === "Awareness Rally"
                      ? {
                          width: 85,
                          height: 16,
                          fontWeight: 500,
                          fontSize: 12,
                          lineHeight: "16px",
                          padding: "0px 8px!",
                          marginBottom: "8px!",
                          opacity: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          whiteSpace: "nowrap",
                        }
                      : undefined
                  }
                >
                  {a.tag}
                </span>
                <h3 className="font-semibold text-lg mb-1!">{a.title}</h3>
                <p className="text-gray-600 text-sm mb-4!">{a.excerpt}</p>
                <div className="mt-auto flex justify-between items-center text-xs text-gray-500 border-t-0! border-gray-200 pt-3!">
                  <span className="flex items-center gap-1!">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.866 0-7 3.134-7 7 0 1.657 1.343 3 3 3h8c1.657 0 3-1.343 3-3 0-3.866-3.134-7-7-7z"
                      />
                    </svg>
                    {a.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {a.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
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
          <div className="bg-blue-50 rounded-xl p-5! flex flex-col md:flex-row justify-between items-center gap-3!">
            <div>
              <h3 className="m-0 font-semibold">
                Find De-addiction Facilities Near You
              </h3>
              <p className="m-0">
                Locate verified Integrated Rehabilitation Centres (IRCA),
                Outreach Centres (ODIC), and Addiction Treatment Facilities
                (ATF) in your district.
              </p>
            </div>
            <button className="bg-blue-800 text-white flex border-0  gap-sm! pt-1! pr-4! pb-1! pl-4! rounded-md">
              View Facility Map
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
  );
};

export default ActivitySnapShot;
