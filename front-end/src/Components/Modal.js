
import React from "react";
import './Modal.css'

function Modal({ setOpenModal }) {
  return (
    <body>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <a href="/userfavorites">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          </a>
        </div>
        <div className="title">
          <h1>There is no beauty here!</h1>
        </div>
        <div>
          <p>Please try your search again!</p>
        </div>
        <div className="button-div">
        <a href="/"> <button className="modal-button"
            onClick={() => {
              setOpenModal(false);
            }}
            id="homeBtn"
          >
            Lets go home
          </button></a>
        
       
        </div>
      </div>
    </div>
    </body>
  );
}

export default Modal;
