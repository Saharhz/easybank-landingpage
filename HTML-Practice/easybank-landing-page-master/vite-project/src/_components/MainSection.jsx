import React from "react";

export default function MainSection() {
  return (
    <div className="flex flex-col justify-left items-start px-6  bg-gray-100">
      <h2 className="font-normal text-2xl md:text-3xl py-5">
        Why choose Easybank?
      </h2>
      <p className="text-[hsl(233, 8%, 62%)] mt-2 text-center">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
    </div>
  );
}
