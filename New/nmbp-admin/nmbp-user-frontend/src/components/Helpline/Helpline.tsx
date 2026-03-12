import React from "react";
import call_icon from "../../assets/call_icon.svg";
import web_icon from "../../assets/web_icon.svg";
import call_icon2 from "../../assets/call_icon2.svg";

const months = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB"];

export default function Helpline() {
  return (
    <div className="w-[1,140px] h-[1,712.48px]  gap-12! ">
      {/* ===================== TOP BANNER ===================== */}
      <div
        className="w-273 h-42 mx-auto rounded-[20px] px-10! py-10! flex justify-between items-center
      bg-[linear-gradient(91deg,#1f8a52_0%,#116641_100%)] relative overflow-hidden mb-10!"
      >
        <div className="text-white max-w-175">
          <h2 className="text-[34px] font-semibold leading-tight mb-3!">
            Confidential Support is Available
          </h2>

          <p className="text-[16px] opacity-90">
            If you or someone you know is struggling with substance use, trained
            counsellors are available for confidential support. 24x7 Toll Free.
          </p>
        </div>

        <div className="text-right space-y-3">
          <p className="text-white text-[10px] tracking-wide">
            NATIONAL DE-ADDICTION HELPLINE
          </p>

          <button
            className="bg-white text-[#198754] px-8! py-1! border-none rounded-2xl
          text-[20px] font-bold flex items-center gap-2! shadow-md"
          >
            <img src={call_icon} alt="call Icon" className="w-10" />
            14446
          </button>
        </div>
      </div>

      {/* ===================== CARDS ROW ===================== */}
      <div className="max-w-300 mx-auto grid grid-cols-2 gap-8! mb-10!">
        {/* CARD 1 */}
        <div className="bg-[#FFFFFF] rounded-[14px] p-8! border border-[#dcdcdc] shadow-sm">
          <div className="flex justify-between mb-4!">
            <div className="gap-2! mb-2! flex flex-col">
              <p className="text-[14px] font-semibold text-[#374151]">
                TOTAL CALLS RECEIVED
              </p>

              <div className="flex gap-6! mb-6!">
                <div className="w-58!">
                  {" "}
                  <p className="text-[13px] text-[#6B7280] font-regular">Dec 24 - Feb 26</p>
                  <p className="text-[32px] text-[#A66A26] font-semibold">13,189</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#6B7280] font-regular">Till Date</p>
                  <p className="text-[32px] font-semibold text-[#A66A26]">
                    4,30,890
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-65 bg-linear-to-t from-[#e9d6bf] to-transparent rounded-md" />
        </div>

        {/* CARD 2 */}
        <div className="bg-[#FFFFFF] rounded-[14px] p-8! border border-[#dcdcdc] shadow-sm">
          <div className="flex justify-between mb-4!">
            <div className="gap-2! mb-2! flex flex-col">
              <p className="text-[14px] font-semibold text-[#374151]">
                TOTAL CALLS COMPLETED
              </p>
              <div className="flex gap-6! mb-6!">
                <div className="w-58!">
                  {" "}
                  <p className="text-[13px] text-[#6B7280] font-regular">Dec 24 - Feb 26</p>
                  <p className="text-[32px] text-[#27682A] font-semibold">13,174</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#6B7280] font-regular">Till Date</p>
                  <p className="text-[32px] font-semibold text-[#27682A]">
                    4,19,779
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-65 bg-linear-to-t from-[#d3eadb] to-transparent rounded-md" />
        </div>
      </div>

      {/* ===================== TABLE + BAR CHART ===================== */}
      <div className="max-w-300 mx-auto grid grid-cols-2 gap-8! mb-10!">
        {/* TABLE */}
        <div className="bg-[#FFFFFF] rounded-[14px] border border-[#E5E7EB] shadow-sm">
          <div className="p-6!">
            <div className="flex justify-between mb-0!">
              <h3 className="font-semibold text-[16px]">All India States</h3>
              <div className=" flex font-medium text-#374151 text-12px ">
                {["Copy", "Excel", "PDF", "Print"].map((btn) => (
                  <button
                    key={btn}
                    className="border border-[#9CA3AF] px-3! py-1! text-xs rounded bg-white"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr className="border-b">
                <th className="bg-[#F9FAFB] border border-[#F3F4F6] text-[#6B7280] font-semibold text-[14px] gap-2! px-6! py-4! w-22! h-13!">
                  S.No
                </th>
                <th className="text-left text-[#6B7280] font-semibold text-[14px] bg-[#F9FAFB] border border-[#F3F4F6] gap-2! px-6! py-4! w-46.5! h-13!">
                  State
                </th>
                <th className="text-right text-[#6B7280] font-semibold text-[14px] bg-[#F9FAFB] border border-[#F3F4F6] gap-2! px-6! py-4! w-31.5! h-13!">
                  Answered
                </th>
                <th className="text-right text-[#6B7280] font-semibold text-[14px] bg-[#F9FAFB] border border-[#F3F4F6] gap-2! px-6! py-4! w-33.5! h-13!">
                  Completed
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  1
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Andaman and Nicobar
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  45
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  45
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  2
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Andhra Pradesh
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  1,391
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  1,391
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  3
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Arunachal Pradesh
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  148
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  148
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  4
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Assam
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  2,274
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  2,268
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  5
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Bihar
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  9,022
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  8,976
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  6
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Chandigarh
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  739
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  737
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  7
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Chhattisgarh
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  2,241
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  2,233
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  8
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Delhi
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  17,804
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  17,707
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  9
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Goa
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  202
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  201
                </td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  10
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  Gujarat
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  4,566
                </td>
                <td className="text-[#374151] font-regular text-[14px] px-6! py-3! border-b! border-[#F3F4F6]">
                  4,550
                </td>
              </tr>
            </tbody>
          </table>
          {/* Pagination Bar */}
          <div className="flex items-center justify-between mt-4! px-6! py-4! h-16! gap-2!">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500">
                &lt;
              </button>
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded border ${num === 1 ? "border-blue-500 bg-blue-50 text-blue-600 font-semibold" : "border-gray-300 bg-white text-gray-500"} cursor-pointer`}
                >
                  {num}
                </button>
              ))}
              <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500">
                &gt;
              </button>
            </div>
            <span className="text-[#6B7280] text-[13px] font-regular">
              Showing
              <span className="font-regular text-[#6B7280] text-[13px]">
                10
              </span>{" "}
              of{" "}
              <span className="font-regular text-[#6B7280] text-[13px]">
                35
              </span>{" "}
              items
            </span>
          </div>
        </div>

        {/* BAR CHART CARD */}
        <div className="bg-[#FFFFFF] rounded-[14px] border border-[#E5E7EB] p-6! shadow-sm w-133.5! h-121.5! gap-6!">
          <div className="flex justify-between mb-4!">
            <h3 className="font-semibold text-[16px]">Call Category Stats</h3>
            <span className="bg-gray-200 px-3! py-1 text-xs rounded">
              1,19,344
            </span>
          </div>

          <div className="flex items-end-safe gap-4! h-64">
            {months.map((m) => (
              <div key={m} className="flex flex-col  flex-1">
                <div className="w-full bg-green-500 h-30" />
                <div className="w-full bg-yellow-400 h-15" />
                <div className="w-full bg-red-400 h-20" />
                <span className="text-xs text-gray-500">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===================== BOTTOM BANNER ===================== */}
      <div
        className="w-full h-48! mx-auto rounded-[20px] pt-8! pb-8! pr-14! pl-8! text-center
      bg-[linear-gradient(90deg,#0b3a60_0%,#1f8a52_100%)] text-white!"
      >
        <div className="gap-2!">
          <h3 className="text-[32px] font-medium mb-3! text-[#FFFFFF]">
            Combat Drug Crime: Report and Seek Help
          </h3>
          <p className="opacity-90 mb-6! text-medium text-[#FFFFFF] ">
            The NCB-MANAS Portal is your secure platform to report drug-related
            issues and access crucial resources.
          </p>
        </div>

        <div className="flex justify-center gap-5!">
          <button className="bg-white text-[#003366] pr-6! pl-4! py-2! rounded-md font-medium text-xs flex items-center gap-2! cursor-pointer">
            <img
              src={web_icon}
              alt="Web Icon"
              className="inline-block w-4! h-4!"
            />
            Proceed to NCB-MANAS Portal
          </button>

          <button className="border border-[#FFFFFF] pr-6! pl-4! py-2! rounded-md font-medium text-xs flex items-center gap-2! cursor-pointer">
            <img
              src={call_icon2}
              alt="Call Icon"
              className="inline-block w-4! h-4!"
            />
            Call NCB Helpline: 1933
          </button>
        </div>
      </div>
    </div>
  );
}
