import React from "react";
import online from "../assets/icon-online.svg";
import budgeting from "../assets/icon-budgeting.svg";
import onboarding from "../assets/icon-onboarding.svg";
import api from "../assets/icon-api.svg";

/*in order not to repeat the style and HTML four times, I make an array with four objects, the by using map() method
I loop through an array and each time generate another array
If in the future we want to add sth to an array, we can do it easily, don't need to repeat the html and css again,
we can easily add our new item to the array and map it.
*/

export default function Onlinebanking() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-10 text-center bg-gray-100">
      {[
        {
          img: online,
          alt: "icon-online",
          title: "Online Banking",
          desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        },
        {
          img: budgeting,
          alt: "budgeting",
          title: "Simple Budgeting",
          desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
          img: onboarding,
          alt: "icon-onboarding",
          title: "Fast Onboarding",
          desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
          img: api,
          alt: "icon-api",
          title: "Open API",
          desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        },
      ].map(({ img, alt, title, desc }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center gap-4"
        >
          <img src={img} alt={alt} className="w-12 h-12" />
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 max-w-xs">{desc}</p>
        </div>
      ))}
    </section>
  );
}
