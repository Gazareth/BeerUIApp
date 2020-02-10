import React, { useContext } from "react";
import { shape, object, string, number } from "prop-types";

import ProductCard from "./generic/productCard";
import BeerAbvVol from "./specific/beerAbvVol";

import { ModalContext } from "./contexts/modalContext";

/******************
 * BeerCard -- Prepares  relevant beer info to display on a productCard:
 * - Name (header)
 * - Image
 * - Detail #1 - ABV, VOL
 * - Detail #2 - Ingredients (shortlist)
 ***********/
const BeerCard = ({ productInfo }) => {
  const { image_url, name, abv, volume, ingredients_short } = productInfo;
  const { setProductModal } = useContext(ModalContext);
  const setModalShow = show => setProductModal({ productInfo, show });

  //ABV, VOL
  const detail1 = <BeerAbvVol {...{ abv, volume }} />;

  return (
    <ProductCard
      {...{
        setModalShow,
        header: name,
        image_url,
        detail1,
        detail2: ingredients_short
      }}
    />
  );
};

BeerCard.propTypes = {
  productInfo: shape({
    image_url: string,
    name: string,
    abv: number,
    volume: object,
    ingredients_short: string
  })
};
export default BeerCard;
