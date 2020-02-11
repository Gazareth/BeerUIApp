import React, { useContext } from "react";
import { arrayOf, object } from "prop-types";

import Row from "react-bootstrap/Row";

import { LoadingContext } from "./contexts/loadingContext";
import { loadingPlaceholder } from "../util/dataPlaceholders";
import BeerCard from "./beerCard";

/******************
 * ProductList -- Maps an array of product data onto product cards
 ***********/
const ProductList = ({ data }) => {
  const isLoading = useContext(LoadingContext);

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
