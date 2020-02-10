import React, { useContext } from "react";
import { bool, func, number } from "prop-types";

import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";

import { LoadingContext } from "../contexts/loadingContext";

/******************
 * PageNavBar -- Displays nav bar with a centred set of pagination buttons, also uses functions tied to hooks from parents
 ***********/
const PageNavBar = ({ setPage, page, pages }) => {
  const isLoading = useContext(LoadingContext);

  return (
    <Nav className="justify-content-center align-items-end">
      <Pagination>
        {page > 1 ? (
          <Pagination.First onClick={() => setPage(1)} disabled={isLoading} />
        ) : null}
        <Pagination.Prev onClick={() => setPage(page - 1)} />{" "}
        {Array.from(Array(page).keys()).map(pageId => (
          <Pagination.Item
            key={pageId}
            active={pageId + 1 === page}
            disabled={isLoading}
            onClick={() => setPage(pageId + 1)}
          >
            {pageId + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </Nav>
  );
};

PageNavBar.propTypes = {
  setPage: func,
  page: number,
  pages: number
};

export default PageNavBar;
