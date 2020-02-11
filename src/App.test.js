import React, { useState } from "react";
import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import useHttp from "./hooks/http.js";

jest.useFakeTimers();

test("tests API call hook", async () => {
  let url = process.env.REACT_APP_BEER_API_URL;
  const { result, waitForNextUpdate } = renderHook(() => {
    useHttp(url);
  });
  await waitForNextUpdate();
  console.log(result.current);

  //console.log("AFTER: ", result.current);
  //expect(result.current.data.length).toBe(25);
  expect(result.current.data.length).toBe(0);
  //console.log(result.current);
});
