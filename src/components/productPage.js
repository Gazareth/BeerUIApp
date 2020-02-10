import React, { useState } from "react";
import { func, number, arrayOf, object } from "prop-types";

import BeerModal from "./beerModal";
import BeerNavBar from "./navbars/beerNavBar";
import ProductList from "./productList";
import PageNavBar from "./navbars/pageNavBar";
import { ModalContext } from "./contexts/modalContext";

/******************
 * ProductPage -- Sets up the basic elements required for a page of products
 ***********/
const ProductPage = ({ setPage, setFilter, pages, page, data }) => {
  const [productModal, setProductModal] = useState({
    show: false,
    productInfo: {}
  });

  return (
    <ModalContext.Provider value={{ productModal, setProductModal }}>
      <BeerModal />
      <BeerNavBar {...{ page, setFilter }} />
      <ProductList {...{ data }} />
      <PageNavBar {...{ setPage, pages, page }} />
    </ModalContext.Provider>
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
