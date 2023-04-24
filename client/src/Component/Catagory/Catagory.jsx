import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import Model from "../Model/Model";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateCatagoryProduct,
  deleteCatagoryProduct,
  getAllCatagoryProduct,
  statusCatagoryupdateProduct,
  updateCatagoryProduct,
} from "../../Store/Redux/CatagoryAction";

const Catagory = () => {
  const [show, setShow] = useState(false);

  const [Id, setId] = useState();

  const [image, setImage] = useState(null);

  //======================================== dispatch

  const dispatch = useDispatch();

  //=======================================useSelector
  const { catagorys } = useSelector((state) => state.Catagory);

  console.log(catagorys);

  const [input, setInput] = useState({
    name: "",
  });

  //========================================handle files

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //========================================handle upload logo
  const handelUploadphoto = (e) => {
    const uploadPhoto = e.target.files[0];
    setImage(uploadPhoto);
  };

  //========================================= delete brand product
  const handleDelete = (id) => {
    dispatch(deleteCatagoryProduct(id));
  };
  //=========================================handle update

  const handleUpdate = (id) => {
    setShow(true);
    setId(id);
    const singleBrandData = catagorys.find((item) => item._id === id);
    setInput({ name: singleBrandData.name, photo: singleBrandData.photo });
  };
  //========================================== create brand product
  const handleBrandCreate = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("name", input.name);

    if (Id) {
      const singleData = catagorys.find((item) => item._id === Id);
      if (image) {
        form_data.append("photo", image);
      } else {
        form_data.append("photo", singleData.photo);
      }
      dispatch(updateCatagoryProduct({ Id, form_data }));
      setId();
      setImage(null);
      setShow(false);
      setInput("");
    } else {
      form_data.append("photo", image);
      dispatch(CreateCatagoryProduct(form_data));
      setShow(false);
      setImage(null);
      setInput("");
    }
  };
  //===========================================update checked
  const handleChecked = (id) => {
    const statusData = catagorys.find((item) => item._id === id);
    dispatch(statusCatagoryupdateProduct({ id, status: !statusData.status }));
  };
  //============================================ useEffect
  useEffect(() => {
    dispatch(getAllCatagoryProduct());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Model title="Catagory" show={show} funk={setShow}>
          <form action="" onSubmit={handleBrandCreate}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleInput}
              value={input.name}
              className="form-control my-3"
              placeholder="Product name"
              name="name"
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
                <Card.Title>Catagory</Card.Title>
                <button
                  onClick={() => setShow(true)}
                  className="btn btn-success"
                >
                  Create Catagory
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
                    {catagorys.map((item, index) => (
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
                              type="switch"
                              checked={item.status}
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

export default Catagory;
