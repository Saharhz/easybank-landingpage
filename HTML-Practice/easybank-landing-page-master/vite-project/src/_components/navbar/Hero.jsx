import React from "react";
import introDesktop from "../../assets/bg-intro-desktop.svg";
import mockups from "../../assets/image-mockups.png";

export default function hero() {
  return (
    <main className="relative flex flex-col md:flex-row justify-between gap-4 p-9 -z-10">
      <div classname="w-1/2 z-20 min-h-[400px] text-center sm:text-left">
        <h1 className="font-normal text-2xl md:text-3xl">
          Next generation digital banking
        </h1>
        <p className="text-[hsl(233, 8%, 62%)] mt-2 mb-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-400 text-white py-2 px-6 w-40 rounded-3xl hover:bg-[hsl(220, 16%, 96%)] hover:text-cyan-400">
          <button className="sm:w-auto text-sm sm:text-base">
            Request Invite
          </button>
        </div>
      </div>
      <div className="relative sm:w-1/2 flex flex-col sm:flex-row items-center justify-center overflow-hidden">
        <img
          src={introDesktop}
          alt="bg-intro-desktop"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-auto h-auto z-0 object-cover"
        />
        <img
          src={mockups}
          alt="image-mockups"
          className=" w-4/5 sm:w-3/5 max-w-[500px] z-10"
        />
      </div>
    </main>
  );
}
