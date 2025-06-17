import React from "react";

const Button = ({className, name}) => {
  return (
    <>
      <button className={className}>
        {name}
      </button>
    </>
  );
};

export default Button;
