import React from 'react';

import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
            <div className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
    </div>
  );
};

export default Modal;