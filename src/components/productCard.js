import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { useIngredients } from "../hooks/ingredients";

const ProductCard = ({ productInfo }) => {
  const { image_url, name, abv, volume, ingredients } = productInfo;
  const [isHover, setIsHover] = useState(false);

  //ABV, VOL
  const abvJSX = <span className="font-weight-bold">{abv}%</span>;
  const volJSX = (
    <span className="font-weight-bold">
      {volume.value}
      {volume.unit.charAt(0).toUpperCase()}
    </span>
  );

  //Ingredients (display only 3)
  const [shortIngList, fullIngList] = useIngredients(ingredients);

  //Truncate ingredients for cards with longer names, by changing css
  const smallStyle =
    name.length > 30
      ? {
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "block",
          textOverflow: "ellipsis"
        }
      : {};

  return (
    <div
      className="my-4 col-sm-12 col-md-6 col-lg-4 col-xl-3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Card
        className="h-100 bg-light"
        border={isHover ? "secondary" : ""}
        style={{ cursor: "pointer" }}
      >
        <Card.Header as="h6" style={{ fontWeight: "550" }}>
          {name}
        </Card.Header>
        <Card.Img
          variant="top"
          src={image_url}
          alt={name + " image"}
          style={{
            padding: "3vh",
            height: "20vh",
            objectFit: "scale-down",
            backgroundColor: "#FFF"
          }}
        />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            ABV {abvJSX} Size {volJSX}
          </Card.Subtitle>
          <Card.Text className="text-muted font-italic">
            <small style={smallStyle}>{shortIngList}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
