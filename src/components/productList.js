import React from "react";
import Row from "react-bootstrap/Row";

import ProductCard from "./productCard";

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
          <ProductCard key={productInfo.id} productInfo={productInfo} />
        ))}{" "}
      </Row>
    </div>
  );
};

export default ProductList;
