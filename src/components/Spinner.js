import React from "react";

export default function Spinner() {
  return (
    <td>
    <button class="btn btn-light" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
  </button>
  <button class="btn btn-light" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>   
  </td>
  );
}
