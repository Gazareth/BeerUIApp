import React from "react";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import { useFetchProducts } from "./hooks/fetchProducts";

import MainNavBar from "./components/navbars/mainNavBar";
import ProductPage from "./components/productPage";
import { LoadingContext } from "./components/contexts/loadingContext";

export const App = () => {
  const perPage = 15;
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});

  const [isLoading, newPages, data] = useFetchProducts(perPage, page, filter);

  if (page > pages) setPages(page); //have to store pages cause total can't be found

  return (
    <LoadingContext.Provider value={isLoading}>
      <MainNavBar />
      <Container style={{ backgroundColor: "#F4F4F4" }}>
        <ProductPage {...{ setPage, setFilter, pages, page, data }} />
      </Container>
    </LoadingContext.Provider>
  );
};

export default App;
