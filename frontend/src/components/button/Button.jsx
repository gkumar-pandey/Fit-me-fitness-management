import React from "react";

const Button = ({ variant, type, children, leftIcon, rightIcon, onClick }) => {
  if (variant === "solid") {
    return (
      <button
        type={type}
        className="text-white gap-2 bg-gradient-to-r from-[var(--green)] from-10%  to-[var(--purple)] via-100%     font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
        onClick={onClick}
      >
        {leftIcon}
        <p>{children}</p>
        {rightIcon}
      </button>
    );
  } else if (variant === "outline") {
    return (
      <button className="text-[var(--purple)] border border-[var(--purple)] hover:bg-[var(--purple)] hover:text-white     font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
        {leftIcon}
        <p>{children}</p>
        {rightIcon}
      </button>
    );
  }
};

export default Button;
