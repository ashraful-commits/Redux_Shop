import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiFillFolderAdd, AiFillWechat } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center my-2">
            <h1>Contact Us</h1>
            <Row className="d-flex mt-5 jutify-content-space-between">
              <Col md={4} className="d-flex flex-column justify-content-center">
                <span>
                  <TfiHeadphoneAlt className="h1 text-warning" />
                </span>
                <h6 className="fw-bold text-uppercase my-2">Buy Phone</h6>
                <span style={{ fontSize: "10px" }}>
                  Monday to Friday,9am to 4pm PST
                </span>
                <span className="lh-1 text-black-50 my-1">
                  North America Toll-Fee
                </span>
                <span className="lh-1 text-black-50">1-877-930-7483</span>
                <span className="lh-1 text-black-50 my-3">International:</span>
                <span className="lh-1 text-black-50">1-877-930-7483</span>
              </Col>
              <Col md={4} className="">
                <span>
                  <AiFillFolderAdd className="h1 text-warning" />
                </span>
                <h6 className="fw-bold text-uppercase my-2">
                  Start a new case
                </h6>
                <p>
                  just send us your questions or comments by starting a new case
                  and we will give you the help you need
                </p>
              </Col>
              <Col md={4} className="">
                <span>
                  <AiFillWechat className="h1 text-warning" />
                </span>
                <h6 className="fw-bold text-uppercase my-2">Live Chat</h6>
                <p>Chat with a member of our in house team</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
