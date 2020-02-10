import React, { useState } from "react";
import { bool, func, number, arrayOf, object } from "prop-types";

import ProductModal from "./productModal";
import BeerNavBar from "./navbars/beerNavBar";
import ProductList from "./productList";
import PageNavBar from "./navbars/pageNavBar";
import { LoadingContext } from "./contexts/loadingContext";

/******************
 * ProductPage -- Sets up the basic elements required for a page of products
 ***********/
export const ProductPage = ({ setPage, setFilter, pages, page, data }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <ProductModal {...{ modalShow, setModalShow }} />
      <BeerNavBar {...{ page, setFilter }} />
      <ProductList {...{ setModalShow, data }} />
      <PageNavBar {...{ setPage, pages, page }} />
    </div>
  );
};

ProductPage.propTypes = {
  setPage: func,
  setFilter: func,
  pages: number,
  page: number,
  data: arrayOf(object)
};
export default ProductPage;
