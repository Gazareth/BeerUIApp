import React from "react";

import { number, object } from "prop-types";

const BeerAbvVol = ({ abv, volume }) => {
  const abvJSX = <span className="font-weight-bold">{abv}%</span>;
  const volJSX = (
    <span className="font-weight-bold">
      {volume.value}
      {volume.unit.charAt(0).toUpperCase()}
    </span>
  );
  return volume.value && volume.value > 0 ? (
    <>
      ABV {abvJSX} Size {volJSX}
    </>
  ) : (
    <></>
  );
};

BeerAbvVol.propTypes = {
  abv: number,
  volume: object
};

export default BeerAbvVol;
