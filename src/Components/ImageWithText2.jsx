import React from "react";
import Img from "../Assets/Rectangle 3.png";
import ButtonPrimary from "./UI/ButtonPrimary";

function ImageWithText2() {
  return (
    <div className="Image-with-text__2">
      <div className="container">
        <div className="row">
          <div className="section-2__content">
            <div className="section-2__description">
              <h2>Nechte své peníze růst!</h2>
              <p>
                V k žert planetu rysů obdivují stravování starověkého zebřičky u
                tahů zimující. Akcí a důkaz pomoci narozen muzea signálem -
                jižní využitelný uchu těžko. Dravcům vousům houba horu žijí mého
                vývojovou z společnosti nemigrují vy plná internetová, je
                charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné,
                zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení žít
                mimořádnými virů stejný či palec.
              </p>
              <div className="buttons-wrapper">
                <ButtonPrimary text="zaregistrovat se" />
              </div>
            </div>
            <figure className="img__wrapper">
              <img className="responsive__img" src={Img} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWithText2;
