import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function Service({ img, heading, para }) {
  return (
    <div className="service">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="service__description">
        <h4>{heading}</h4>
        <p>{para}</p>
        <ButtonPrimary text="zjistit více" />
      </div>
    </div>
  );
}

export default Service;
