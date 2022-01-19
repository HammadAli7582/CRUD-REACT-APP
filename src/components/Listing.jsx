import { Row, Col, Table } from "react-bootstrap";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { getUserList } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Listing = ({ handleClickEdit, handleClickDelete }) => {
  const users = useSelector((state) => state.userList.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      <Row className="mt-4">
        <Col md={4} className=" p-3 shadow">
          <h3>Users List</h3>
          <Table hover responsive bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="text-capitalize linkColor">
                    <Link
                      to={`/userdetail/${user.id}`}
                      className="text-decoration-none text-dark linkColor"
                    >
                      {user.name}
                    </Link>
                  </td>

                  <td
                    onClick={() => handleClickEdit(user)}
                    className="text-center"
                  >
                    <FontAwesomeIcon icon={faEdit} className="my-style" />
                  </td>
                  <td
                    onClick={() => handleClickDelete(user.id)}
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
