import React from "react";
import { shape, object, string, number } from "prop-types";

import ProductCard from "./productCard";

import { useIngredients } from "../hooks/ingredients";

/******************
 * BeerCard -- Displays relevant beer info in a concise format:
 * - Name (header)
 * - Image
 * - Detail #1 - ABV, VOL
 * - Detail #2 - Ingredients (shortlist)
 ***********/
const BeerCard = ({ productInfo }) => {
  const { image_url, name, abv, volume, ingredients } = productInfo;

  //ABV, VOL
  const abvJSX = <span className="font-weight-bold">{abv}%</span>;
  const volJSX = (
    <span className="font-weight-bold">
      {volume.value}
      {volume.unit.charAt(0).toUpperCase()}
    </span>
  );
  const detail1 = (
    <>
      ABV {abvJSX} Size {volJSX}
    </>
  );

  //INGREDIENTS (display only 3)
  const [shortIngList, fullIngList] = useIngredients(ingredients);

  return (
    <ProductCard
      {...{ header: name, image_url, detail1, detail2: shortIngList }}
    />
  );
};

BeerCard.propTypes = {
  productInfo: shape({
    image_url: string,
    name: string,
    abv: number,
    volume: object,
    ingredients: object
  })
};
export default BeerCard;
