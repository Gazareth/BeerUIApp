import React from "react";
import { bool, func, arrayOf, object } from "prop-types";

import Row from "react-bootstrap/Row";

import BeerCard from "./beerCard";

/******************
 * ProductList -- Maps an array of product data onto product cards
 ***********/
export const ProductList = ({ isLoading, data }) => {
  const loadingPlaceholder = {
    name: "Loading...",
    id: "0",
    ingredients: {},
    volume: {
      volume: "",
      unit: ""
    }
  };
  const products = isLoading ? [loadingPlaceholder] : data;

  return (
    <div>
      <Row>
        {" "}
        {products.map(productInfo => (
          <BeerCard key={productInfo.id} productInfo={productInfo} />
        ))}
      </Row>
    </div>
  );
};

ProductList.propTypes = {
  isLoading: bool,
  setModalShow: func,
  data: arrayOf(object)
};
export default ProductList;
