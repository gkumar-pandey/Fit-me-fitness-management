import React from "react";

const Input = ({ placeholder, type, onChange, name, id, value }) => {
  return (
    <input
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      className="w-full p-2 mt-1 border rounded-md"
    />
  );
};

export default Input;
