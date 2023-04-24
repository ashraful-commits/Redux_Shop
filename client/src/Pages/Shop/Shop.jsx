import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Model from "../../Component/Model/Model";

const Shop = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Row>
          {/* left side  */}
          <Col md={3}>
            <Card className="rounded-0 shadow-sm">
              <Card.Body>
                <form action="">
                  <div className="serarch">
                    <h6 className="mt-2">Search Product</h6>
                    <input
                      className="form-control"
                      placeholder="Search product here"
                      type="search"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="catagory">
                    <h6 className="mt-2">Catagory</h6>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                  </div>
                  <div className="brand">
                    <h6 className="mt-2">Brand</h6>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="" className="my-1 mx-2">
                        Man
                      </label>
                    </div>
                  </div>
                  <div className="tags ">
                    <h6 className="mt-2 ">Tags</h6>
                    <div className="flex-wrap d-flex">
                      <button className="btn btn-outline-success m-1">
                        Man
                      </button>
                      <button className="btn btn-outline-success m-1">
                        Man
                      </button>
                      <button className="btn btn-outline-success m-1">
                        Man
                      </button>
                      <button className="btn btn-outline-success m-1">
                        Man
                      </button>
                      <button className="btn btn-outline-success m-1">
                        Man
                      </button>
                    </div>
                  </div>
                  <div className="tags ">
                    <h6 className="mt-2 ">Filter</h6>
                    <div className="filter d-flex">
                      <input
                        type="number"
                        placeholder="min"
                        className="form-control rounded-0"
                      />
                      <input
                        type="number"
                        placeholder="max"
                        className="form-control rounded-0"
                      />
                      <button className="btn btn-success rounded-0">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
          {/* right side  */}
          <Col md={9}>
            <Card className="rounded-0 shadow-sm">
              <Card.Header>
                <Card.Title>All Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3} className="my-2">
                    <Model title="view" show={show} funk={setShow}>
                      <Card>
                        <Card.Header>
                          <Card.Title>Product Title</Card.Title>
                        </Card.Header>
                      </Card>
                    </Model>
                    <Card className="rounded-0 shadow-sm">
                      <Card.Body className="p-0 ">
                        <img
                          className="card-img rounded-0"
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                          alt=""
                        />
                        <div className="btn-group justify-content-between d-flex">
                          <button className="btn  btn-success rounded-0">
                            add to cart
                          </button>
                          <button
                            onClick={() => setShow(true)}
                            className="btn btn-success rounded-0 ms-2 "
                          >
                            view
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
