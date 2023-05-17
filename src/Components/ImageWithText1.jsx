import React from "react";
import Img from "../Assets/Rectangle 2.png";
import ButtonPrimary from "./UI/ButtonPrimary";

function ImageWithText1() {
  return (
    <div className="Image-with-text__1">
      <div className="container">
        <div className="row">
          <div className="section__content">
            <figure className="img__wrapper">
              <img className="responsive__img" src={Img} alt="" />
            </figure>
            <div className="section__description">
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
              <div className="section__description-points">
                <p>
                  • Musel za až angličtinu látky nohy deprimovaná polokouli i
                  roku map.
                </p>
                <p>
                  • Těžko popsal, ještě zúročovat však, by čase musel mi nuly,
                  ta naší.
                </p>
                <p>
                  • Musel za až angličtinu látky nohy deprimovaná polokouli i
                  roku map.
                </p>
                <p>
                  • Těžko popsal, ještě zúročovat však, by čase musel mi nuly,
                  ta naší.
                </p>
              </div>
              <div className="buttons-wrapper">
                <ButtonPrimary text="zjistit více" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWithText1;
