import React, { useContext } from "react";
import { arrayOf, object } from "prop-types";

import Row from "react-bootstrap/Row";

import BeerCard from "./beerCard";
import { LoadingContext } from "./contexts/loadingContext";

/******************
 * ProductList -- Maps an array of product data onto product cards
 ***********/
const ProductList = ({ data }) => {
  const isLoading = useContext(LoadingContext);

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
  data: arrayOf(object)
};

export default ProductList;
