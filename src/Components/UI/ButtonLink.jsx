import React from "react";

function ButtonLink({ text, icon }) {
  return (
    <>
      <li className="nav__list">
        <a href="/" className="nav__link">
          {text}
        </a>
        {icon}
      </li>
    </>
  );
}

export default ButtonLink;
