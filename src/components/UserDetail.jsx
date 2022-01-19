import { Row, Col, Table } from "react-bootstrap";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getUserDetail } from "../redux/actions/userDetailActions";
const Listing = ({ handleClickEdit, handleClickDelete }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail.user);
  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch]);
  return (
    <>
      <Row className="mt-4">
        <Col md={4} className=" p-3 shadow">
          <h3>Users Detail</h3>
          <Table hover responsive bordered>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr key={user.id}>
                  <td className="text-capitalize">{user.title}</td>
                  <td className="text-capitalize">{user.date}</td>
                  <td
                    // onClick={() => handleClickEdit(user)}
                    className="text-center"
                  >
                    <FontAwesomeIcon icon={faEdit} className="my-style" />
                  </td>
                  <td
                    // onClick={() => handleClickDelete(user.id)}
                    className="text-center"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="my-style" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Listing;
