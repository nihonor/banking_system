import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div
      className={`h-screen bg-white p-6 md:flex hidden flex-col shadow-lg transition-all duration-300 ${
        collapse ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="mb-12 flex items-center gap-3">
        {!collapse && (
          <h1 className="text-2xl">
            <span className="text-pr-color font-bold">Hospital</span> logo
          </h1>
        )}
        {collapse ? (
          <GoSidebarExpand
            className="cursor-pointer text-xl"
            onClick={() => setCollapse(false)}
          />
        ) : (
          <GoSidebarCollapse
            className="cursor-pointer text-xl"
            onClick={() => setCollapse(true)}
          />
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive
                    ? "text-pr-color border-r-4 border-pr-color "
                    : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                {/* <MdDashboard /> */}
              </div>
              {!collapse ? <Link to="/dashboard">Dashboard</Link> : " "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                {/* <TbReport /> */}
              </div>
              {!collapse?<Link to="/appointment">Appointment request</Link>:' '}
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tables"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                {/* <CiStreamOn /> */}
              </div>
            
            {!collapse?<Link to="#">Tables</Link>:' '}
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                {/* <MdAutoGraph /> */}
              </div>
              
              {!collapse?<Link to="#">Articles</Link>:' '}
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                {/* <CgProfile /> */} 
              </div>
              
              {!collapse?<Link to="#">Profile</Link>:' '}
              
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="pt-6 border-t">
        <NavLink
          to="/logout"
          className={({ isActive }: { isActive: boolean }) =>
            `flex items-center gap-3 ${
              isActive ? "text-pr-color" : "text-gray-500"
            } hover:text-pr-color`
          }
        >
          <div className="text-xl">
            <IoLogOutOutline />
          </div>
          
          {!collapse ? <Link to="#">Log out</Link> : ' '}
          
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
