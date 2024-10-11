import React from "react";

const Nutrition = () => {
  return (
    <div className="w-full py-5 font-outfit text-WengeBrown   flex flex-col justify-center items-start  md:py-10 ">
      <h2 className="font-bold text-3xl py-4 text-Nutmeg font-young md:text-4xl xl:text-5xl md:pb-5">
        Nutrition
      </h2>
      <p className="md:text-xl xl:text-2xl ">
        {" "}
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="flex flex-col justify-between items-center w-full  ">
        <div className="flex justify-between items-center w-full pr-24 border-b-2 border-b-LightGrey h-16 md:my-8  md:pr-56">
          <p className="text-lg pl-5 md:text-xl xl:text-2xl">Calories</p>{" "}
          <b className="text-Nutmeg text-xl  md:text-2xl">277kcal</b>
        </div>
        <div className="flex justify-between items-center w-full pr-24 border-b-2 border-b-LightGrey h-16 md:my-8  md:pr-56">
          <p className="text-lg pl-5 md:text-xl xl:text-2xl">Carbs</p>{" "}
          <b className="text-Nutmeg text-xl  md:text-2xl">0g</b>
        </div>
        <div className="flex justify-between items-center w-full pr-24 border-b-2 border-b-LightGrey h-16 md:my-8  md:pr-56">
          <p className="text-lg pl-5 md:text-xl xl:text-2xl">Protein</p>{" "}
          <b className="text-Nutmeg text-xl  md:text-2xl">20g</b>
        </div>
        <div className="flex justify-between items-center w-full pr-24 border-b-2 border-b-LightGrey h-16 md:my-8  md:pr-56">
          <p className="text-lg pl-5 md:text-xl xl:text-2xl">Fat</p>{" "}
          <b className="text-Nutmeg text-xl  md:text-2xl">22g</b>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
