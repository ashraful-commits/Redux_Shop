import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import Model from "../Model/Model";

const Tag = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Model title="Tags" show={show} funk={setShow}>
          <form action="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Product name"
              name=""
              id=""
            />
            <label htmlFor="">Photo</label> <br />
            <input className="form-control" type="file" />
            <br />
            <button className="btn btn-success my-3 w-100">Create</button>
          </form>
        </Model>
        <Row>
          <Col>
            <Card className="rounded-0">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title>Tags</Card.Title>
                <button
                  onClick={() => setShow(true)}
                  className="btn btn-success"
                >
                  Create Tags
                </button>
              </Card.Header>
              <Card.Body>
                <table className="table">
                  <thead>
                    <tr className="align-middle">
                      <th>#</th>
                      <th>name</th>
                      <th>Photo</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Apple</td>
                      <td>
                        <img
                          style={{ width: "40px" }}
                          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
                          alt=""
                        />
                      </td>
                      <td>
                        <Form>
                          <Form.Check type="switch" id="custom-switch" />
                        </Form>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning mx-1">
                          <BiEdit />
                        </button>
                        <button className="btn btn-sm btn-danger mx-1">
                          <BiTrash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tag;
