import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import Model from "../Model/Model";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateTagProduct,
  deleteTagProduct,
  getAllTagProduct,
  statusTagupdateProduct,
  updateTagProduct,
} from "../../Store/Redux/TagAction";

const Tag = () => {
  const [show, setShow] = useState(false);
  const [Id, setId] = useState();

  // dispatch
  const dispatch = useDispatch();
  //useSelector
  const { tags } = useSelector((state) => state.Tag);

  const [input, setInput] = useState({
    name: "",
  });

  //====================handle files

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //===========================handle upload logo

  //=================== delete brand product
  const handleDelete = (id) => {
    dispatch(deleteTagProduct(id));
  };
  //===================handle update

  const handleUpdate = (id) => {
    setShow(true);
    setId(id);
    const singleBrandData = tags.find((item) => item._id === id);
    setInput({ name: singleBrandData.name });
  };
  //==================== create brand product
  const handleBrandCreate = (e) => {
    e.preventDefault();
    if (Id) {
      dispatch(updateTagProduct({ Id, name: input.name }));
      setId();
      setShow(false);
      setInput("");
    } else {
      console.log(input.name);
      dispatch(CreateTagProduct({ name: input.name }));
      setShow(false);
      setInput("");
    }
  };
  //===================update checked
  const handleChecked = (id) => {
    const statusData = tags.find((item) => item._id === id);
    dispatch(statusTagupdateProduct({ id, status: !statusData.status }));
  };
  //=================== useEffect
  useEffect(() => {
    dispatch(getAllTagProduct());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Model title="Tags" show={show} funk={setShow}>
          <form action="" onSubmit={handleBrandCreate}>
            <label htmlFor="">Name</label>
            <input
              onChange={handleInput}
              type="text"
              className="form-control my-3"
              placeholder="Product name"
              name="name"
              value={input.name}
            />

            <button type="submit" className="btn btn-success my-3 w-100">
              Create
            </button>
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

                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tags.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
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
                            onClick={() => handleDelete}
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

export default Tag;
