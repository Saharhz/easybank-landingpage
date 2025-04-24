import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

export default function footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
        <div className="flex flex-col items-center md:items-start gap-6">
          <img src={logo} alt="logo" className="w-32" />
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} className="w-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img src={youtube} className="w-6" />
            </a>
            <a href="https://www.x.com" target="_blank">
              <img src={twitter} className="w-6" />
            </a>
            <a href="https://www.pinterest.com" target="_blank">
              <img src={pinterest} className="w-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} className="w-6" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#">About Us</a>
            <a href="#">contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <div className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400 text-white py-2 px-6 h-10 w-28 rounded-3xl hover:bg-[hsl(220, 16%, 96%)] hover:text-cyan-400 transition">
            <button className="text-sm sm:text-base">Request</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-6 py-2 flex text-sm text-gray-400 justify-center md:justify-end -mt-9">
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
