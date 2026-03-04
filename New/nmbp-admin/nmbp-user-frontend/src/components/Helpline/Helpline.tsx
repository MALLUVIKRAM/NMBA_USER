import React from "react";
import call_icon from "../../assets/call_icon.svg";
import web_icon from "../../assets/web_icon.svg";
import call_icon2 from "../../assets/call_icon2.svg";

const months = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB"];

export default function Helpline() {
  return (
    <div className="bg-white min-h-screen p-6! space-y-8!">
      {/* ===================== TOP BANNER ===================== */}
      <div
        className="w-full max-w-300 mx-auto rounded-[20px] px-10! py-10! flex justify-between items-center
      bg-[linear-gradient(91deg,#1f8a52_0%,#116641_100%)] relative overflow-hidden"
      >
        <div className="text-white max-w-[700px]">
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
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-[#FFFFFF] rounded-[14px] p-8! border border-[#dcdcdc] shadow-sm">
          <div className="flex justify-between mb-4!">
            <div>
              <p className="text-[14px] font-semibold text-gray-700">
                TOTAL CALLS RECEIVED
              </p>
              <p className="text-[13px] text-gray-500">Dec 24 - Feb 26</p>
            </div>
            <p className="text-[13px] text-gray-500">Till Date</p>
          </div>

          <div className="flex gap-20 mb-6!">
            <p className="text-[34px] font-bold text-[#a65c1c]">13,189</p>
            <p className="text-[30px] font-bold text-[#a65c1c]">4,30,890</p>
          </div>

          <div className="h-65 bg-gradient-to-t from-[#e9d6bf] to-transparent rounded-md" />
        </div>

        {/* CARD 2 */}
        <div className="bg-[#FFFFFF] rounded-[14px] p-8! border border-[#dcdcdc] shadow-sm">
          <div className="flex justify-between mb-4!">
            <div>
              <p className="text-[14px] font-semibold text-gray-700">
                TOTAL CALLS COMPLETED
              </p>
              <p className="text-[13px] text-gray-500">Dec 24 - Feb 26</p>
            </div>
            <p className="text-[13px] text-gray-500">Till Date</p>
          </div>

          <div className="flex gap-20 mb-6!">
            <p className="text-[34px] font-bold text-[#1f6e3a]">13,174</p>
            <p className="text-[30px] font-bold text-[#1f6e3a]">4,19,779</p>
          </div>

          <div className="h-65 bg-linear-to-t from-[#d3eadb] to-transparent rounded-md" />
        </div>
      </div>

      {/* ===================== TABLE + BAR CHART ===================== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-8">
        {/* TABLE */}
        <div className="bg-[#FFFFFF] rounded-[14px] border p-6! shadow-sm">
          <div className="flex justify-between mb-4!">
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

          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr className="border-b">
                <th className="py-2! text-left">S.No</th>
                <th className="py-2! text-left">State</th>
                <th className="py-2! text-right">Answered</th>
                <th className="py-2! text-right">Completed</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2!">{i + 1}</td>
                  <td>State Name</td>
                  <td className="text-right">1,234</td>
                  <td className="text-right">1,200</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BAR CHART CARD */}
        <div className="bg-[#FFFFFF] rounded-[14px] border p-6! shadow-sm">
          <div className="flex justify-between mb-4!">
            <h3 className="font-semibold text-[16px]">Call Category Stats</h3>
            <span className="bg-gray-200 px-3! py-1! text-xs rounded">
              1,19,344
            </span>
          </div>

          <div className="flex items-end gap-4! h-64">
            {months.map((m) => (
              <div key={m} className="flex flex-col items-center flex-1">
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
