import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="d-flex bg-success mt-5 justify-content-center">
          <Col md={4}>
            <div className="bg-success">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link text-white fw-bolder" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white fw-bolder"
                    to={"/shop"}
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white fw-bolder"
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white fw-bolder"
                    to={"/admin"}
                  >
                    Admin
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
