import React from "react";

function FiltrationButton({ text, active }) {
  return (
    <button
      className={`btn__filtration ${active && " btn__filtration--active"}`}
    >
      {text}
    </button>
  );
}

export default FiltrationButton;
