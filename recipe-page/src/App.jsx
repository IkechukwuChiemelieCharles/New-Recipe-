import React from "react";
import Header from "./Components/Header.jsx";
import Prep from "./Components/Prep.jsx";
import Ingredient from "./Components/Ingredient.jsx";
import Instruction from "./Components/Instruction.jsx";
import Nutrition from "./Components/Nutrition.jsx";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className="p-10 xl:p-16">
        <img
          className="w-full lg:rounded-2xl"
          src="/image-omelette.jpeg"
          alt=""
        />
      </div>
      <div className="w-full overflow-hidden flex flex-col justify-center items-center px-10 relative sm:bg-red-500 md:bg-blue-600 lg:bg-orange-500 xl:bg-slate-600 xl:px-16">
        <Header />
        <Prep />
        <Ingredient />
        <Instruction />
        <Nutrition />
      </div>
    </div>
  );
}
