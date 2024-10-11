import React from "react";
import Header from "./Components/Header.jsx";
import Prep from "./Components/Prep.jsx";
import Ingredient from "./Components/Ingredient.jsx";
import Instruction from "./Components/Instruction.jsx";
import Nutrition from "./Components/Nutrition.jsx";
import "./index.css";

export default function App() {
  return (
    <div className=" bg-Eggshell sm:py-10 md:px-20 md:pt-15 lg:px-48 lg:pt-28 xl:px-80 2xl:px-96 mt-128">
      <div className="sm:p-10 xl:p-16 bg-white    sm:rounded-t-3xl">
        <img
          className="w-full sm:rounded-3xl"
          src="/image-omelette.jpeg"
          alt=""
        />
      </div>
      <div className="w-full overflow-hidden flex flex-col justify-center items-center px-10 relative bg-white sm:pb-10 sm:rounded-b-3xl xl:px-16">
        <Header />
        <Prep />
        <Ingredient />
        <Instruction />
        <Nutrition />
      </div>
    </div>
  );
}
