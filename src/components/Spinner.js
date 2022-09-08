import React from "react";

export default function Spinner() {
  return (
    <td
      colSpan={6}
      align="center"
      height="300"
      style={{ verticalAlign: "middle" }}
    >
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </td>
  );
}
