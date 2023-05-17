import React from "react";
import FiltrationButton from "./UI/FiltrationButton";
import Service from "./UI/Service";
import Img1 from "../Assets/Service 1.png";
import Img2 from "../Assets/Service 2.png";
import Img3 from "../Assets/Service 3.png";
import Img4 from "../Assets/Rectangle 4.png";

function Services() {
  return (
    <div className="services__container">
      <div className="row">
        <div className="services__description">
          <h2 className="services__heading">
            Vyberte jednu z nabízených služeb
          </h2>
          <p className="services__para">
            Hlasu zkrátka nevratné duší indičtí půlkilometrová začali nutné už
            odstředisko. Společných snažila líně budoucnost začne vloženy stal
            objevováním, umělé cílem starým dne větvičky názvy moři zabíjí.
          </p>
        </div>
        <div className="services">
          <div className="services__buttons">
            <FiltrationButton text="všechno" active />
            <FiltrationButton text="papírové tašky" />
            <FiltrationButton text="látkové tašky" />
            <FiltrationButton text="igelitové tašky" />
          </div>
          <div className="services__wrapper">
            <Service
              img={Img1}
              heading="Látkové tašky s potiskem"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
            <Service
              img={Img2}
              heading="Látkové tašky bez potisku"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
            <Service
              img={Img3}
              heading="Bílé papírové tašky"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
            <Service
              img={Img4}
              heading="Barevné papírové tašky na dárky"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
            <Service
              img={Img3}
              heading="Papírové tašky z recyklovatelného materiálu"
              para="Dlouhá význam ssionismu ty, jí antény i sezona"
            />
            <Service
              img={Img1}
              heading="Igelitové sáčky s logem"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
            <Service
              img={Img2}
              heading="Velké tašky s potiskem"
              para="Dlouhá význam ssionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
