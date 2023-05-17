import React from "react";
import Logo from "../Assets/logo 3.svg";
import ButtonLink from "./UI/ButtonLink";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "./UI/Menu";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="navbar">
      <div className="row">
        <div className="nav__container">
          <figure>
            <img src={Logo} alt="" />
          </figure>
          <ul className="nav__links">
            <ButtonLink text="O nás" />
            <div className="dropdown">
              <ButtonLink
                text="Služby"
                icon={<ExpandMoreIcon className="service_icon" />}
              />
              <div className="dropdown-content">
                <Menu text="submenu" />
                <Menu text="submenu" />
                <Menu text="submenu" />
                <Menu text="submenu" />
              </div>
            </div>
            <ButtonLink text="Aktuality" />
            <ButtonLink text="Novinky" />
            <ButtonLink text="Kontakty" />
            <Button className="btn__backdrop" onClick={openMenu}>
              <MenuIcon />
            </Button>
          </ul>
          <div className="menu__backdrop">
            <Button
              className="btn__backdrop btn__backdrop--close"
              onClick={closeMenu}
            >
              <CloseIcon />
            </Button>
            <ul className="backdrop__links">
              <ButtonLink text="O nás" />
              <ButtonLink text="Služby" />
              <ButtonLink text="Aktuality" />
              <ButtonLink text="Novinky" />
              <ButtonLink text="Kontakty" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
