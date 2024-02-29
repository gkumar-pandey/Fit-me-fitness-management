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
    <nav className="bg-[#FFFFFF] text-slate-600 h-screen lg:w-[15%] p-8 py-4 flex flex-col gap-4 font-[sintony]">
      <div className="flex items-center justify-center gap-2 my-4 text-2xl font-bold">
        <img src={logoImg} alt="Logo" className="w-10 h-10" />
        <p className="tracking-wider text-black">Fitme</p>
      </div>
      {navlinks.map(({ link, text, icon }, idx) => (
        <Link
          key={idx}
          className={`flex gap-3 items-center cursor-pointer text-lg font-bold mt-8 px-8 py-4 rounded-full ${
            pathname === link ? "bg-[#dcf8f5]" : "hover:bg-[#F3FBFA]"
          }`}
          to={link}
        >
          {icon}
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
