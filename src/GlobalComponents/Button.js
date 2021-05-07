import React from "react";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button className="c-button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
