import React from "react";

export default function Header() {
  return (
    <div className="w-full py-5 sm:py-8 md:py-4   flex flex-col justify-center items-start border-b-2 border-b-RoseWhite md:pb-16">
      <h2 className="font-bold text-3xl py-4 text-Nutmeg font-young  ">
        Ingredients
      </h2>
      <ul className="prepListItem2 list-disc px-5 text-DarkCharcoal text-lg md:text-xl ">
        <li className=" font-medium mt-1">2-3 large eggs</li>
        <li className=" font-medium mt-1">Salt, to taste</li>
        <li className=" font-medium mt-1">Pepper, to taste</li>
        <li className=" font-medium mt-1">1 tablespoon of butter or oil</li>
        <li className=" font-medium mt-1">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}
