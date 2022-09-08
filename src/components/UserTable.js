import React from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function UserTable({ user, setLocation }) {
  return (
    <tr>
      <Td>
        <img src={user?.picture?.thumbnail} />
      </Td>
      <Td>{user?.name?.first}</Td>
      <Td>{user?.name?.last}</Td>
      <Td>{user?.email}</Td>
      <Td>{user?.phone}</Td>
      <Td>
        <FaLocationArrow
          data-toggle="tooltip"
          data-placement="right"
          title="Location"
          style={{ cursor: "pointer" }}
   
          data-target="#exampleModalCenter"
          onClick={() => setLocation(user?.location)}
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
      }}
    >
      {children}
    </td>
  );
}