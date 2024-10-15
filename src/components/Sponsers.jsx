import React from "react";
import stellar from "../assets/images/stellar-logo.svg";
import chainlink from "../assets/images/chainlink-logo.svg";
import polygon from "../assets/images/polygon-logo.svg";
import nem from "../assets/images/nem-logo.svg";

function Sponsers() {
  const images = [stellar, chainlink, polygon, nem];
  return (
    <div className="sponsers">
      <p>Find jobs from</p>
      {/* <div className="image-wrapper"> */}
        {images.map((image) => (
          <img key={image.id} {...images} src={image} alt="image-logo" />
        ))}
      {/* </div> */}
    </div>
  );
}

export default Sponsers;
