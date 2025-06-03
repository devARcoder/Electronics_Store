import React from "react";

const Button = ({className, name}) => {
  return (
    <>
      <button className={`mt-6 px-6 py-3 ${className} rounded-xl font-bold text-lg transition-all`}>
        {name}
      </button>
    </>
  );
};

export default Button;
