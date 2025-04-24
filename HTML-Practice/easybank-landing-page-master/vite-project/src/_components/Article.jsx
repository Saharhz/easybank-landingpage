import React from "react";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

//pay attention to comments on the OnlineBanking.jsx

export default function Article() {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-normal mb-8 text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            img: currency,
            alt: "image-currency",
            title: "By Claire Robinson",
            desc: "Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
          },
          {
            img: restaurant,
            alt: "image-restaurant",
            title: "By Wilson Hutton",
            desc: "Treat yourself without worrying about money Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
          },

          {
            img: plane,
            alt: "image-plane",
            title: "By Wilson Hutton",
            desc: "Take your Easybank card wherever you go We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
          },

          {
            img: confetti,
            alt: "image-confetti",
            title: "By Claire Robinson",
            desc: "Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
          },
        ].map(({ img, alt, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-4"
          >
            <img
              src={img}
              alt={alt}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
