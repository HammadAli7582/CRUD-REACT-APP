import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Listing from "../components/Listing";
import {
  createUserList,
  getUserList,
  deleteUserList,
  updateUserList,
} from "../redux/actions/userActions";

const HomeScreen = () => {
  const [listData, setListData] = useState("");
  const [editFunctionId, setEditFunctionId] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setListData(e.target.value);
  };
  const handleClickEdit = (user) => {
    setListData(user.name);
    setEditFunctionId(user.id);
  };
  const handleClickDelete = async (id) => {
    dispatch(deleteUserList(id));
    dispatch(getUserList());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editFunctionId) {
      const data = {
        name: listData,
      };
      dispatch(updateUserList(editFunctionId, data));
      dispatch(getUserList());
      setListData("");
      setEditFunctionId("");
    } else {
      const data = {
        name: listData,
        userDetail: [],
      };
      dispatch(createUserList(data));
      dispatch(getUserList());
      setListData("");
    }
  };

  return (
    <>
      <Row>
        <h3 className="mb-3">Create Users</h3>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                value={listData}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className={`${!listData && "disabled"}`}
            >
              {editFunctionId ? "UPDATE USER" : "ADD USER"}
            </Button>
          </Form>
        </Col>
      </Row>
      <Listing
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
    </>
  );
};

export default HomeScreen;
