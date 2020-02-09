import { useEffect, useState } from "react";

export const useIngredients = ingredients => {
  const [fullList, setFullList] = useState([]);
  const [shortList, setShortList] = useState("");

  useEffect(() => {
    // INGREDIENTS
    // combine ingredients from all categories into one array and select 3 randomly
    const fullIngredients = Object.keys(ingredients).length
      ? ingredients.hops
          .concat(ingredients.malt)
          .concat({ name: ingredients.yeast })
      : [];
    setFullList(fullIngredients);

    const numToDisplay = fullIngredients.length ? 3 : 0;
    setShortList(
      new Array(numToDisplay)
        .fill()
        .map(
          () =>
            fullIngredients[
              Math.round(Math.random() * (fullIngredients.length - 1))
            ]
        )
        .map(ingredient => ingredient.name)
        .join(", ")
    );
  }, []);

  return [shortList, fullList];
};
