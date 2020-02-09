import React from "react";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import { useFetchProducts } from "./hooks/fetchProducts";

import MainNavBar from "./components/navbars/mainNavBar";
import ProductPage from "./components/productPage";

export const App = () => {
  const perPage = 15;
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [isLoading, pages, data] = useFetchProducts(perPage, page, filter);

  return (
    <div>
      <MainNavBar />
      <Container style={{ backgroundColor: "#F4F4F4" }}>
        <ProductPage
          {...{ isLoading, setPage, setFilter, pages, page, data }}
        />
      </Container>
    </div>
  );
};

export default App;
