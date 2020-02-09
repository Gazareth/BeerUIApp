import React from "react";

import BeerNavBar from "./navbars/beerNavBar";
import ProductList from "./productList";
import PageNavBar from "./navbars/pageNavBar";

export const ProductPage = ({
  isLoading,
  setPage,
  setFilter,
  pages,
  page,
  data
}) => {
  console.log("ProductPage: loading --", isLoading);
  return (
    <div>
      <BeerNavBar {...{ isLoading, page, setFilter }} />
      <ProductList {...{ isLoading, data }} />
      <PageNavBar {...{ isLoading, setPage, pages, page }} />
    </div>
  );
};

export default ProductPage;
