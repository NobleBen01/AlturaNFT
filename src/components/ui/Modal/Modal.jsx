import React from "react";

import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <p className="text-center text-light">
           <span className="money">Description</span>
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
          vel, deleniti adipisci facilis nemo magni voluptate itaque esse 
          recusandae nam molestiae neque eius aliquid.</p>

        <hr />

        <div className=" d-flex align-items-center justify-content-between">
          <p>NFT Owner's Address</p>
          <span className="money">xxxxxxxxxxxxxxx</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">Place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;