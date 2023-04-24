import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Card style={{ height: "70vh" }} className="rounded-0">
              <Card.Body>
                <h4>Dashboard</h4>
                <ul className="nav flex-column">
                  <li className="nav-item border border-bottom-1 border-top-0 border-start-0 border-end-0">
                    <NavLink to={""} className="nav-link ">
                      Product
                    </NavLink>
                  </li>
                  <li className="nav-item border border-bottom-1 border-top-0 border-start-0 border-end-0">
                    <NavLink to={"catagroy"} className="nav-link">
                      Catagory
                    </NavLink>
                  </li>
                  <li className="nav-item border border-bottom-1 border-top-0 border-start-0 border-end-0">
                    <NavLink to={"barnd"} className="nav-link">
                      Brand
                    </NavLink>
                  </li>
                  <li className="nav-item border border-bottom-1 border-top-0 border-start-0 border-end-0">
                    <NavLink to={"tag"} className="nav-link">
                      Tags
                    </NavLink>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
