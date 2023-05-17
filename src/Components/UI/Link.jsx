import React from "react";

function Link({ text }) {
  return (
    <a className="footer__link" href="/">
      {text}
    </a>
  );
}

export default Link;
