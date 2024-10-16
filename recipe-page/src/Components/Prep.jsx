import React from "react";
// import "index.css";

export default function Header() {
  return (
    <div className="w-full py-5 flex flex-col justify-center items-start bg-RoseWhite rounded-2xl md:py-10 md:my-5 md:px-10 font-outfit">
      <h2 className="font-bold text-2xl px-5 py-2 text-DarkRaspberry sm:py-5 md:text-2xl">
        Preparation time
      </h2>
      <ul className="prepListItem list-disc  px-10 text-WengeBrown text-lg md:text-xl">
        <li className="font-medium mt-2  md:mt-5">
          <b className="text-DarkCharcoal text-xl  ">Total:</b>
          Approximately 10 minutes
        </li>
        <li className=" font-medium mt-2  md:mt-5">
          <b className="text-DarkCharcoal text-xl  ">Preparation: </b>5 minutes
        </li>
        <li className=" font-medium mt-2  md:mt-5">
          <b className="text-DarkCharcoal text-xl  ">Cooking: </b>5 minutes
        </li>
      </ul>
    </div>
  );
}
