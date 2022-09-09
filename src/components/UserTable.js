import React from "react";
import { FaLink } from "react-icons/fa";
import { Image } from "react-bootstrap";

export default function UserTable({ user, setLocation, setShowModal }) {
  const handleClick = () => {
    setLocation(user?.location);
    setShowModal(true);
  };

  return (
    <tr>
      <Td className="color-white">
      <Image src={user?.picture.large} className="rounded-circle img-thumbnail mx-auto"  />
      </Td>
      <Td >{user?.name?.first}</Td>
      <Td>{user?.name?.last}</Td>
      <Td>{user?.email}</Td>
      <Td>{user?.phone}</Td>
      <Td>
        <FaLink
          data-toggle="tooltip"
          data-placement="right"
          title="Location"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </Td>
    </tr>
  );
}

function Td({ children }) {
  return (
    <td
      style={{
        verticalAlign: "middle",
        alignItems: "center",
        textAlign: "center",
        color: "whitesmoke",
      }}
    >
      {children}
    </td>
  );
}
