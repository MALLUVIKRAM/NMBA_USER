import React from "react";
import { NavLink } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import NationalEmblem from "../../assets/national_emblem.svg";
import MinistryName from "../../assets/ministry_name.svg";

const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <header className="gov-strip bg-white flex items-center justify-between px-6! py-2!">
        <div className="gov-left flex gap-4 items-center">
          <img src={NationalEmblem} alt="Gov logo" className="h-12 w-auto" />
          <img src={MinistryName} alt="Ministry name" className="h-10 w-auto" />
        </div>
        <div className="gov-right flex items-center gap-4">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-end mr-2">
              <span className="font-semibold text-[#374151] leading-tight text-base">
                Sachin Malhotra
              </span>
              <span className="text-xs text-[#6B7280] leading-tight">
                sachin.malhotra@email.com
              </span>
            </div>
            <div className="rounded-lg bg-[#E5EAF2] text-[#374151] font-semibold w-10 h-10 flex items-center justify-center text-base">
              SM
            </div>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav className="nav-list">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/activity"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Activity Snapshot
            </NavLink>
            <NavLink
              to="/epledge"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              E-Pledge
            </NavLink>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Facilities
            </NavLink>
            <NavLink
              to="/helpline"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Helpline
            </NavLink>
          </nav>
        </aside>

        <main className="main">{children}</main>
      </div>
      <footer className="flex bg-[#002244] py-4! mt-8! px-8! w-full h-13!">
        <span className=" text-[#FFFFFF] text-left w-250.5 h-5! text-[14px] font-medium">
          © 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY
          Government of India®2025 UX4G
        </span>
        <div className="flex  w-63.5! h-5! gap-4!">
          <span className="text-[14px] text-[#FFFFFF] font-medium">
            Terms&Conditions
          </span>
          <hr className="border border-[#9CBFE3]  w-5! rotate-90 " />
          <span className="text-[14px] text-[#FFFFFF] font-medium">
            Privacy Policy
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AppShell;
