import React from "react";
const ProductDetails = ({detailImg, detailType, detailTitle}) => {
  return (
    <>
        
    <div>
      <div className="images">
        <img src={detailImg} alt="" />
      </div>
      
      <div className="details">
        
        <div className="heading">
          <p>{detailType}</p>
          <h1>{detailTitle}</h1>
          <p>stars</p>
        </div>
        <div className="buttons">
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
        <div className="list">
          <ul>
            <li>Accept SIM card and call</li>
            <li>Take photos</li>
            <li>Make calling instead of mobile phone</li>
            <li>Sync music play and sync control music</li>
            <li>Sync Facebook,Twitter,email and calendar</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
