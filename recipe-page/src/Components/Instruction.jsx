import React from "react";
/* RoseWhite: "hsl(330, 100%, 98%)",
Eggshell: "hsl(30, 54%, 90%)",

LightGrey: "hsl(30, 18%, 87%)", 
 DarkRaspberry: "hsl(332, 51%, 32%)",
        White: "hsl(0, 0%, 100%)",
        RoseWhite: "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        LightGrey: "hsl(30, 18%, 87%)",
        WengeBrown: "hsl(30, 10%, 34%)",
        DarkCharcoal: "hsl(24, 5%, 18%)",*/
const Instruction = () => {
  return (
    <div className="w-full py-5   flex flex-col justify-center items-start border-b-2 border-b-RoseWhite sm:py-8 md:pb-20 md:pt-10 font-outfit">
      <h2 className="font-bold text-3xl py-4 text-Nutmeg font-young md:text-4xl xl:text-5xl">
        Instructions
      </h2>
      <ol className="list-decimal px-4 text-WengeBrown  prepListItem2 md:text-xl xl:text-2xl">
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl"> Beat the eggs: </b>In a bowl,
          beat the eggs with a pinch of salt and pepper until they are well
          mixed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl">Heat the pan:</b> Place a
          non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl">Cook the omelette:</b> Once the
          butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl">Add fillings (optional):</b>{" "}
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl">Fold and serve:</b> As the
          omelette continues to cook, carefully lift one edge and fold it over
          the fillings. Let it cook for another minute, then slide it onto a
          plate.
        </li>
        <li className="mt-4">
          <b className="md:text-xl xl:text-2xl"> Enjoy:</b> Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
};

export default Instruction;
