import { useHttp } from "./http";

export const useFetchProducts = (perpage, page, filter) => {
  // filter params should be "search, filterName, filterParam"
  const search =
    filter.beerName && filter.beerName.length
      ? ["beer_name=" + filter.beerName]
      : [];

  const params = ["per_page=" + perpage, "page=" + page]
    .concat(search)
    .join("&");

  const [isLoading, data] = useHttp(
    "https://api.punkapi.com/v2/beers?" + params,
    [perpage, page, params]
  );

  const pages = Math.ceil(data.length / perpage);

  console.log("Setting loading ", isLoading);

  return [isLoading, pages, data];
};
