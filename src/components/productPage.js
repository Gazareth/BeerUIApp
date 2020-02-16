import React, { useState } from "react";
import { func, number, arrayOf, object } from "prop-types";

import BeerModal from "./BeerModal";
import BeerNavBar from "./navbars/BeerNavBar";
import ProductList from "./ProductList";
import PageNavBar from "./navbars/PageNavBar";
import ModalContext from "./contexts/ModalContext";

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
