import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
}
const Button = (prop: ButtonProps) => {
  return (
    <button
      className={`bg-color-4 text-color-1 border-[1px] border-color-1 cursor-pointer shadow shadow-color-4
    hover:-translate-y-1 active:translate-y-1
    ${prop.className || ""}`}
      onClick={prop.onClick}
    >
      {prop.children}
    </button>
  );
};

export default Button;
