import React from 'react';

const Input = ({
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
