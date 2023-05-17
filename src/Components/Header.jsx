import React from "react";
import Img from "../Assets/Rectangle 1.png";
import ButtonPrimary from "./UI/ButtonPrimary";
import ButtonSecondary from "./UI/ButtonSecondary";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="header__content">
          <div className="header__description">
            <h1>Hlavní nadpis webu</h1>
            <p>
              V k žert planetu rysů obdivují stravování starověkého zebřičky u
              tahů zimující. Akcí a důkaz pomoci narozen muzea signálem.
            </p>
            <div className="header__description-buttons">
              <ButtonSecondary className=" header__btn" text="Více informací" />
              <ButtonPrimary text="Poptat na nabídku" />
            </div>
          </div>
          <div className="img__wrapper">
            <img className="responsive__img" src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
