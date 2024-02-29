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
      className="w-full p-2 my-2 text-white bg-[var(--primary-bg-color)] border border-gray-700 rounded-md"
    />
  );
};

export default Input;
