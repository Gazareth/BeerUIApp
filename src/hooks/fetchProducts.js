import { useHttp } from "./http";
import { useIngredients } from "./ingredients";

/******************
 * useFetchProducts -- Hook which builds the URL for retrieving the products based on page number
 ***********/
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

  //INGREDIENTS (shortList: display only 3, fullList: normalised array of all ingredients)
  const processedData = useIngredients(data);

  const pages = Math.ceil(data.length / perpage);

  return [isLoading, pages, processedData];
};
