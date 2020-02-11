import { useEffect } from "react";

/******************
 * useManagePages -- Hooks which maintain current page number and max page numbers for when the filter or page changes
 ***********/
const useManagePages = (
  setAllPages,
  setPages,
  setPage,
  filter,
  allPages,
  pages,
  page
) => {
  //Reset current page to 0 when the search filter changes
  //  set current end page number to stored value or 1
  useEffect(() => {
    setPage(1);
    setPages(allPages[filter.beerName] || 1);
  }, [filter.beerName]);

  //Update the end page number when the page changes
  //    store new end page value for current filter
  useEffect(() => {
    const endPage = Math.max(pages, page);
    setPages(endPage);
    setAllPages({ ...allPages, [filter.beerName]: endPage });
  }, [page]);
};

export default useManagePages;
