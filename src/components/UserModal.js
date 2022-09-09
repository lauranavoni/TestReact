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

          </div>
          <div className="modal-body">
            <p>
              {location?.country}, {location?.city}, {location?.street?.name}{" "},{location?.street?.number}
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
   
  
    

