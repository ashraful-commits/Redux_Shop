import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsSearch,
  BsTwitter,
  BsInstagram,
  BsFillBagFill,
  BsFacebook,
} from "react-icons/bs";
import { BiUser, BiLogIn } from "react-icons/bi";
const TopNavbar = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 d-flex justify-content-between align-items-center">
          <Col md="2">
            <div className="">
              <img
                alt="logo"
                style={{ width: "50px" }}
                src="https://th.bing.com/th/id/R.76e3661144e5f27e1f5d80fc3c0f82a3?rik=Q854may1RNNXlg&pid=ImgRaw&r=0"
              />
            </div>
          </Col>
          <Col md="7">
            <form action="" className="d-flex align-items-center b">
              <label
                htmlFor=""
                className="border bg-success text-white py-2 px-2 fw-bolder "
              >
                <BsSearch />
              </label>

              <input
                className="form-control py-2 rounded-0"
                placeholder="Search product here"
                type="search"
              />
            </form>
          </Col>
          <Col md="3 d-flex justify-content-end align-items-center">
            <div className=" d-flex align-items-center">
              <button className=" h4 btn-outline-success btn-sm btn d-flex justify-content-center align-items-center py-2 mx-2 ">
                <BsFacebook className="" />
              </button>
              <button className="h4 btn-outline-success btn-sm btn d-flex justify-content-center align-items-center py-2 mx-2 ">
                <BsInstagram className="" />
              </button>
              <button className=" h4 btn-outline-success btn-sm btn d-flex justify-content-center align-items-center py-2 mx-2 ">
                <BsTwitter className="" />
              </button>
              <button className="h4 btn-success btn-sm btn d-flex justify-content-center align-items-center position-relative py-2 mx-2">
                {" "}
                <span
                  className="position-absolute d-flex justify-content-center align-items-center "
                  style={{
                    top: "-50%",
                    right: "-50%",
                    color: "white",
                    padding: "5px",
                    width: "25px",
                    height: "25px",
                    backgroundColor: "green",
                    borderRadius: "100%",
                    border: "1px solid white",
                    display: "inline-block",
                  }}
                >
                  1
                </span>
                <BsFillBagFill />
              </button>
              <button className="h4 btn-success btn-sm btn d-flex justify-content-center align-items-center py-2 mx-2 ">
                <BiLogIn />
              </button>
              <button className="h3 btn-success btn-sm btn d-flex justify-content-center align-items-center py-2 mx-2 ">
                <BiUser />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopNavbar;
