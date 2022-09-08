import React from "react";

export function UserModal({ location }) {
  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div
          class="modal-content"
          style={{ backgroundColor: "rgb(69, 77, 85)" }}
        >
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLongTitle">
              Location
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" style={{ color: "white" }}>
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              {location?.country}, {location?.city}, {location?.street?.name}{" "}
              Street, {location?.street?.number}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


