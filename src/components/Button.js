import React from "react";

const Button = (props) => {
  const { text } = props;

  return (
    <button {...props} className="button">
      {text}
    </button>
  );
};
export default Button;
