import React from "react";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import useFetchProducts from "./hooks/FetchProducts";
import useManagePages from "./hooks/ManagePages";

import MainNavBar from "./components/navbars/MainNavBar";
import ProductPage from "./components/ProductPage.js";
import LoadingContext from "./components/contexts/LoadingContext";

export const App = () => {
  const perPage = process.env.REACT_APP_BEERS_PER_PAGE;
  const [allPages, setAllPages] = useState({}); //keep track of max page numbers per filter
  const [pages, setPages] = useState(1); //
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});

  useManagePages(setAllPages, setPages, setPage, filter, allPages, pages, page);
  const [isLoading, data] = useFetchProducts(perPage, page, filter);

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
