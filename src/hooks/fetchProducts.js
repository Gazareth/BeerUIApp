import useHttp from "./Http";
import useIngredients from "./Ingredients";

/******************
 * useFetchProducts -- Hook which builds the URL for retrieving the products based on page number
 ***********/
const useFetchProducts = (perpage, page, filter) => {
  // filter params should be "search, filterName, filterParam"
  const search =
    filter.beerName && filter.beerName.length
      ? ["beer_name=" + filter.beerName]
      : [];

  const params = ["per_page=" + perpage, "page=" + page]
    .concat(search)
    .join("&");

  const [isLoading, data] = useHttp(
    process.env.REACT_APP_BEER_API_URL + "?" + params
  );

  //INGREDIENTS (shortList: display only 3, fullList: normalised array of all ingredients)
  const processedData = useIngredients(data);

  return [isLoading, processedData];
};

export default useFetchProducts;
