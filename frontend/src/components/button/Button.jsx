import React from "react";

const Button = ({ variant, type, children, leftIcon, rightIcon, onClick }) => {
  if (variant === "solid") {
    return (
      <button
        type={type}
        className="text-white gap-2 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        {leftIcon}
        <p>{children}</p>
        {rightIcon}
      </button>
    );
  } else if (variant === "outline") {
    return (
      <button className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white     font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
        {leftIcon}
        <p>{children}</p>
        {rightIcon}
      </button>
    );
  }
};

export default Button;
