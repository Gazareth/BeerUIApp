import { useState, useEffect } from "react";
import { noDataPlaceholder } from "../util/dataPlaceholders";

/******************
 * useHttp -- Hook which reads from given URL and returns the data as json
 ***********/
const useHttp = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setFetchedData] = useState([]);

  useEffect(() => {
    if (isLoading) return [isLoading, data];
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data for " + url + ".");
        }
        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          setIsLoading(false);
          setFetchedData(data.length ? data : [noDataPlaceholder]);
        }, process.env.REACT_APP_REQUEST_DELAY);
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, [url]);

  return [isLoading, data];
};

export default useHttp;
