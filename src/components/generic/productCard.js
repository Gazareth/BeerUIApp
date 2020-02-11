import React, { useState } from "react";
import { func, string, element, oneOfType } from "prop-types";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

/******************
 * ProductCard -- Displays relevant product info in a concise format:
 * - Name (header)
 * - Image
 * - Detail #1
 * - Detail #2
 ***********/
const ProductCard = ({ setModalShow, header, image_url, detail1, detail2 }) => {
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
    <Col
      xs={6}
      md={4}
      xl={3}
      className="my-4"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        setModalShow(true);
      }}
    >
      <Card
        className={"h-100 bg-light " + (isHover ? "shadow" : "shadow-sm")}
        border={isHover ? "secondary" : ""}
        style={{ cursor: "pointer" }}
      >
        <Card.Header as="h6" style={{ fontWeight: "550" }}>
          {header}
        </Card.Header>
        <Card.Img
          variant="top"
          src={image_url}
          alt={header}
          style={{
            padding: "3vh",
            height: "20vh",
            objectFit: "scale-down",
            backgroundColor: "#FCFCFC"
          }}
        />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{detail1}</Card.Subtitle>
          <Card.Text className="text-muted font-italic">
            <small style={smallStyle}>{detail2}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

ProductCard.propTypes = {
  setModalShow: func,
  header: string,
  image_url: string,
  detail1: oneOfType([string, element]),
  detail2: oneOfType([string, element])
};
export default ProductCard;
