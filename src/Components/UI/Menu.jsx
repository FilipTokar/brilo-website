import React from "react";

function Menu({ text }) {
  return (
    <>
      <div className="anchor__wrapper">
        <a className="menu__anchor" href="/">
          {text}
        </a>
      </div>
    </>
  );
}

export default Menu;
