import React from "react";
import Logo from "../Assets/logo 2.svg";
import Link from "./UI/Link";

function Footer() {
  return (
    <div className="row">
      <div className="divider"></div>
      <div className="footer">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <div className="footer__links">
          <Link text="První proklik" />
          <Link text="Druhý proklik" />
          <Link text="Třetí proklik" />
        </div>
        <div className="footer__copyright">
          <p>© 2022 Thalion All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
