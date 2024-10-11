import React from "react";

export default function Header() {
  return (
    <header className="w-full py-6 sm:py-1 flex justify-center items-start flex-col md:py-2">
      <h1 className="text-black text-3xl  font-young ">
        Simple Omelette Recipe
      </h1>
      <p className="my-6 font-young text-WengeBrown md:text-xl ">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </header>
  );
}
