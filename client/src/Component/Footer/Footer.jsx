import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="d-flex mt-5 justify-content-center">
          <Col>
            <div className="d-flex justify-content-center">
              <p>all rights reserved &copy; 2023</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
