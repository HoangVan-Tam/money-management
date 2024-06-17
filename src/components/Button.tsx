import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
}
const Button = (prop: ButtonProps) => {
  return (
  prop.href == null ? 
    <button
      className={`bg-color-4 text-color-1 border-[1px] border-color-1 cursor-pointer shadow shadow-color-4
    hover:-translate-y-[2px] active:translate-y-[2px] duration-300
    ${prop.className || ""}`}
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
    :
      <Link to={prop.href!}
        className={`bg-color-1 rounded text-color-4 px-3 border-[1px] border-color-1 cursor-pointer
    hover:-translate-y-[2px] hover:bg-color-1 hover:text-color-4 hover:shadow-md hover:shadow-color-1
    active:translate-y-[2px] duration-200
    ${prop.className || ""}`}
        onClick={prop.onClick}
      >
        {prop.children}
      </Link>
    );
};

export default Button;
