import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRunning } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { logoImg } from "../../assets";
import { MdDashboard } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const navlinks = [
    { link: "/", text: "Dashboard", icon: <MdDashboard /> },
    { link: "/exercise", text: "Exercise", icon: <FaRunning /> },
    { link: "/target", text: "Target", icon: <GiBullseye /> },
    { link: "/food", text: "Food", icon: <GiMeal /> },
  ];

  return (
    <nav className="bg-[var(--primary-bg-color)] text-white h-screen lg:w-[15%] p-8 py-4 flex flex-col gap-4 shadow-xl border-r-[1px] border-slate-700 ">
      <div className="flex items-center justify-center gap-2 my-4 text-2xl font-bold">
        <img src={logoImg} alt="Logo" className="w-10 h-10" />
        <p className="text-4xl font-bold text-white">Fitme</p>
      </div>
      <div className="flex flex-col gap-2">
        {navlinks.map(({ link, text, icon }, idx) => (
          <Link key={idx} to={link}>
            <button
              className={`flex w-full gap-1 items-center cursor-pointer py-2 px-3 rounded-lg ${
                pathname === link
                  ? " bg-gradient-to-r from-[var(--purple)] to-[var(--pink)]"
                  : "hover:bg-[var(--purple)]"
              }`}
            >
              {icon}
              {text}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
