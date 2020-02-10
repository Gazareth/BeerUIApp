import React, { useState } from "react";
import { string, element, oneOfType } from "prop-types";

import Card from "react-bootstrap/Card";

/******************
 * ProductCard -- Displays relevant product info in a concise format:
 * - Name (header)
 * - Image
 * - Detail #1
 * - Detail #2
 ***********/
const ProductCard = ({ header, image_url, detail1, detail2 }) => {
  const [isHover, setIsHover] = useState(false);

  //Truncate second details section for cards with longer headers, by changing css
  const smallStyle =
    header.length > 30
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
          {header}
        </Card.Header>
        <Card.Img
          variant="top"
          src={image_url}
          alt={header + " image"}
          style={{
            padding: "3vh",
            height: "20vh",
            objectFit: "scale-down",
            backgroundColor: "#FFF"
          }}
        />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{detail1}</Card.Subtitle>
          <Card.Text className="text-muted font-italic">
            <small style={smallStyle}>{detail2}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  header: string,
  image_url: string,
  detail1: oneOfType([string, element]),
  detail2: oneOfType([string, element])
};
export default ProductCard;
