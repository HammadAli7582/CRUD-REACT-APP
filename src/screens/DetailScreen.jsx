import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import UserDetail from "../components/UserDetail";
const DetailScreen = () => {
  const navigation = useNavigate();
  const [detailData, setDetailData] = useState({
    title: "",
    date: "",
  });
  // const [editFunctionId, setEditFunctionId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailData({
      ...detailData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(detailData);
    setDetailData({
      title: "",
      date: "",
    });
  };
  // const handleClickEdit = (user) => {

  // };
  // const handleClickDelete = async (id) => {
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (editFunctionId) {
  //     const data = {
  //       name: listData,
  //     };
  //     dispatch(updateUserList(editFunctionId, data));
  //     dispatch(getUserList());
  //     setListData("");
  //     setEditFunctionId("");
  //   } else {
  //     const data = {
  //       name: listData,
  //     };
  //     dispatch(createUserList(data));
  //     dispatch(getUserList());
  //     setListData("");
  //   }
  // };

  return (
    <>
      <Button onClick={() => navigation("/")}>
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </Button>
      <Row className="mt-3">
        <h3 className="mb-3">Create User Detail</h3>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                value={detailData.title}
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Control
                type="date"
                name="date"
                onChange={handleChange}
                value={detailData.date}
                placeholder="Date"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className={`${
                !detailData.title && !detailData.date && "disabled"
              }`}
            >
              ADD USER DETAIL
            </Button>
          </Form>
        </Col>
      </Row>
      <UserDetail />
    </>
  );
};

export default DetailScreen;
