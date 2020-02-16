import { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import useHttp from "./Http.js";

test("test main API call hook", async () => {
  let url = process.env.REACT_APP_BEER_API_URL;
  const { result, rerender, waitForNextUpdate } = renderHook(() =>
    useHttp(url)
  );

  //URL is requested on render. Component sets isLoading...
  expect(result.current[0]).toBeTruthy(); //isLoading
  await waitForNextUpdate(); //wait for response
  expect(result.current[0]).toBeFalsy(); //isLoading no longer
  expect(result.current[1].length).toBeGreaterThan(0); //has data

  const setUrl = toUrl => (url = "invalid_url");

  //rerender();

  //New request when URL is changed?
  //invalid URL should fail
  act(() => {
    setUrl();
  });

  rerender();

  expect(url).toBe("invalid_url");
  expect(result.current[0]).toBeTruthy(); //isLoading
  await waitForNextUpdate(); //wait for response
  expect(result.current[0]).toBeFalsy(); //isLoading no longer
  expect(result.current[1].length).toBe(0); //no data
});
