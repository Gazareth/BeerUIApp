import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setFetchedData] = useState([]);

  useEffect(() => {
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
          setFetchedData(data);
        }, 1200);
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, data];
};
