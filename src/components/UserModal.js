import React from "react";

export function UserModal({ location,setShowModal }) {
  const handleClose = () =>{
    setShowModal(false)
  }
  return (

      <div className="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <div className="modal-header">
            <h5>
              Address Users
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={handleClose}
            >
              <span aria-hidden="true" style={{ color: "black" }}>
                &times;
              </span>
            </button>
            
          </div>
          <div className="modal-body">
            <p>
              {location?.country}, {location?.city}, {location?.street?.name}{" "}
              Street, {location?.street?.number}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>

    
  );
}


