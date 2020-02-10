import { useEffect, useState } from "react";

export const useIngredients = data => {
  const [processedData, setProcessedData] = useState([]);

  //const ingredients = data.map(datum => datum.ingredients);

  useEffect(() => {
    const processedProduct = product => {
      const ingredients = product.ingredients;
      // flatten ingredient names from all categories (keys) into one array
      const ingredients_all = Object.keys(ingredients)
        .map(key =>
          Array.isArray(ingredients[key])
            ? ingredients[key].map(ing => ing.name)
            : ingredients[key]
        )
        .flat();

      //Select 3 random ingredient names, join into one string
      const numToDisplay = ingredients_all.length ? 3 : 0;
      const ingredients_short = new Array(numToDisplay)
        .fill()
        .map(
          () =>
            ingredients_all[
              Math.round(Math.random() * (ingredients_all.length - 1))
            ]
        )
        .join(", ");

      return {
        ...product,
        ingredients_all,
        ingredients_short
      };
    };

    setProcessedData(data.map(datum => processedProduct(datum)));
  }, [data]);

  return processedData;
};
