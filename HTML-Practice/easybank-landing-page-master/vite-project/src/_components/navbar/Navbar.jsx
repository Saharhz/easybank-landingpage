import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
export default function Navbar() {
  //   return <a href="#">{props.children}</a>;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHamburger = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex items-center justify-between p-4 relative">
      <div className="flex justify-start">
        <img src={Logo} alt="logo" />
      </div>
      <div className="sm:hidden cursor-pointer" onClick={toggleHamburger}>
        &#9776;
      </div>
      <div
        className={`flex-col sm:flex sm:flex-row sm:items-center sm:gap-5 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#" className="py-2 sm:py-0 sm:text-2xl">
          Home
        </a>
        <a href="#" className="py-2 sm:py-0 sm:text-2xl">
          About
        </a>
        <a href="#" className="py-2 sm:py-0 sm:text-2xl">
          Contact
        </a>
        <a href="#" className="py-2 sm:py-0 sm:text-2xl">
          Blog
        </a>
        <a href="#" className="py-2 sm:py-0 sm:text-2xl">
          Careers
        </a>
      </div>
      <div className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400 text-white py-2 px-6 rounded-3xl w-32 hover:bg-[hsl(220, 16%, 96%)] hover:text-cyan-400">
        <button className="sm:w-auto text-sm sm:text-base">
          Request Invite
        </button>
      </div>
    </nav>
  );
}
