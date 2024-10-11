import React from "react";

export default function Header() {
  return (
    <header className="w-full py-10 flex justify-center items-start flex-col md:py-16">
      <h1 className="text-black font-bold text-4xl md:text-5xl font-young xl:text-6xl">
        Simple Omelette Recipe
      </h1>
      <p className="mt-10 font-young text-WengeBrown md:text-xl xl:text-2xl">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
}
