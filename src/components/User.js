import React from "react";
import { Card, Col } from "react-bootstrap";
import UserModal from "./UserModal";

const User = ({ user }) => {
  const { name } = user;

  return (
    <>
      <Col class="col-md-6">
        <Card class="card-img-top">
          <Card.Body>
            <Card.Title>First Name: {`${name.first}`}</Card.Title>
            <Card.Title>Last Name: {`${name.last}`}</Card.Title>
            <Card.Text>
              Phone :{user?.phone} <br></br>
              Email : {user?.email}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <UserModal user={user}></UserModal>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default User;
