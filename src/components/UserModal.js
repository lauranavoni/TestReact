import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaLink } from "react-icons/fa";

function UserModal({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FaLink size="5%" className="mr-4" />
      <Button onClick={handleShow}>Link</Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1> Users Address</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Image src={user?.picture.large} class="img-thumbnail mx-auto"  />
        </Modal.Body>
        <Modal.Body> First Name: {`${user?.name.first}`}</Modal.Body>
        <Modal.Body> Last Name: {` ${user?.name.last}`}</Modal.Body>
        <Modal.Body>Country: {user?.location.country}</Modal.Body>
        <Modal.Body>City: {user?.location.city}</Modal.Body>
        <Modal.Body>State: {user?.location.state}</Modal.Body>
        <Modal.Body>
          Street: {user?.location.street.number} Name:{" "}
          {user?.location.street.name}
        </Modal.Body>

        <Modal.Footer>
          <Button class="" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;
