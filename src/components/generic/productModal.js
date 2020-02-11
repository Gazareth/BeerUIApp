import React from "react";
import { bool, func, string, oneOfType, element } from "prop-types";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductModal = ({
  show,
  setModalShow,
  header,
  image_url,
  detail1,
  detail2,
  description,
  brewersTips,
  ingredients_all,
  foodPairing
}) => {
  return (
    <Modal
      {...{ show }}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid my-4">
            <Col xs={12} md={5} className="d-flex justify-content-center">
              <img
                src={image_url}
                alt={header + " image"}
                style={{
                  padding: "3vh",
                  height: "20vh",
                  objectFit: "scale-down",
                  backgroundColor: "#FFF"
                }}
              />
            </Col>
            <Col xs={12} md={7}>
              <h4 className="font-weight-bold">{header}</h4>
              <div className="text-muted">{detail1}</div>
              <small className="text-secondary font-italic">
                {'"' + detail2 + '"'}
              </small>
              <div>
                <small className="font-italic text-dark">{description}</small>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h6 className="font-weight-bold">Brewer's Tips</h6>
              <p>{brewersTips}</p>
              <h6 className="font-weight-bold">Ingredients</h6>
              <p>{ingredients_all}</p>
              <h6 className="font-weight-bold">Food Pairing</h6>
              <p>{foodPairing}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductModal.propTypes = {
  show: bool,
  setModalShow: func,
  header: string,
  image_url: string,
  detail1: oneOfType([string, element]),
  detail2: oneOfType([string, element]),
  description: string,
  brewersTips: string,
  ingredients_all: string,
  foodPairing: string
};

export default ProductModal;
