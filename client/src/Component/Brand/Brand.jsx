import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import Model from "../Model/Model";
import {
  CreateBrandProduct,
  deleteBrandProduct,
  getAllBrandProduct,
  statusBrandupdateProduct,
  updateBrandProduct,
} from "../../Store/Redux/Action";
import { useDispatch, useSelector } from "react-redux";
const Brand = () => {
  const [show, setShow] = useState(false);
  const [Id, setId] = useState();
  const [image, setImage] = useState(null);

  // dispatch
  const dispatch = useDispatch();
  //useSelector
  const { brands } = useSelector((state) => state.Brand);

  const [input, setInput] = useState({
    name: "",
  });

  //====================handle files

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //===========================handle upload logo
  const handelUploadphoto = (e) => {
    const uploadPhoto = e.target.files[0];
    setImage(uploadPhoto);
  };

  //=================== delete brand product
  const handleDelete = (id) => {
    dispatch(deleteBrandProduct(id));
  };
  //===================handle update

  const handleUpdate = (id) => {
    setShow(true);
    setId(id);
    const singleBrandData = brands.find((item) => item._id === id);
    setInput({ name: singleBrandData.name, photo: singleBrandData.photo });
  };
  //==================== create brand product
  const handleBrandCreate = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("photo", image);
    if (Id) {
      dispatch(updateBrandProduct({ Id, form_data }));
      e.target.reset();
      setId();
    } else {
      dispatch(CreateBrandProduct(form_data));
      setShow(false);
      e.target.reset();
    }
  };
  //===================update checked
  const handleChecked = (id) => {
    const statusData = brands.find((item) => item._id === id);
    dispatch(statusBrandupdateProduct({ id, status: !statusData.status }));
  };
  //=================== useEffect
  useEffect(() => {
    dispatch(getAllBrandProduct());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Model title="Brand" show={show} funk={setShow}>
          <form onSubmit={handleBrandCreate}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={input.name}
              className="form-control my-3"
              placeholder="Product name"
              id=""
            />
            <label htmlFor="">Photo</label> <br />
            <input
              onChange={handelUploadphoto}
              className="form-control"
              type="file"
            />
            <br />
            <button type="submit" className="btn btn-success my-3 w-100">
              Create
            </button>
          </form>
        </Model>
        <Row>
          <Col>
            <Card className="rounded-0">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title>Brand</Card.Title>
                <button
                  onClick={() => setShow(true)}
                  className="btn btn-success"
                >
                  Create Brand
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
                    {brands &&
                      brands.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            <img
                              style={{ width: "40px" }}
                              src={`http://localhost:5050/brands/${item.photo}`}
                              alt=""
                            />
                          </td>
                          <td>
                            <Form>
                              <Form.Check
                                onChange={() => handleChecked(item._id)}
                                checked={item.status}
                                type="switch"
                                id="custom-switch"
                              />
                            </Form>
                          </td>
                          <td>
                            <button
                              onClick={() => handleUpdate(item._id)}
                              className="btn btn-sm btn-warning mx-1"
                            >
                              <BiEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-sm btn-danger mx-1"
                            >
                              <BiTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
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

export default Brand;
