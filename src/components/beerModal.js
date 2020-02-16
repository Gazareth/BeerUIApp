import React, { useContext } from "react";

import ProductModal from "./generic/ProductModal";
import BeerAbvVolume from "./specific/BeerAbvVol";
import ModalContext from "./contexts/ModalContext";

const BeerModal = () => {
  const { productModal, setProductModal } = useContext(ModalContext);
  const { show, productInfo } = productModal;
  const setModalShow = toShow =>
    setProductModal({ ...productModal, show: toShow });

  const {
    name,
    image_url,
    abv,
    volume,
    tagline,
    description,
    brewers_tips,
    ingredients_all
  } = productInfo;

  const detail1 = <BeerAbvVolume {...{ abv, volume }} />;
  const foodPairing = (productInfo.food_pairing || []).join(", ");

  return (
    <ProductModal
      {...{
        show,
        setModalShow,
        header: name,
        image_url,
        detail1,
        detail2: tagline,
        description,
        brewersTips: brewers_tips,
        ingredients_all: (ingredients_all || []).join(", "),
        foodPairing
      }}
    />
  );
};

export default BeerModal;
