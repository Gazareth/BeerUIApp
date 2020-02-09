import React from "react";

import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";

const PageNavBar = ({ isLoading, setPage, page, pages }) => {
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

export default PageNavBar;
