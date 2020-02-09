import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setFetchedData] = useState([]);

  console.log("Using https...(dependencies", dependencies, ")");

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending http request to " + url + ".");
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data for " + url + ".");
        }
        console.log("RESPONSE: ", response);
        return response.json();
      })
      .then(data => {
        console.log("Retrieved data successfully. ", data);
        setTimeout(() => {
          setIsLoading(false);
          setFetchedData(data);
        }, 1200);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, data];
};
