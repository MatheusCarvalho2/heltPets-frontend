import React from "react";
import { buttonVariants } from "./buttonVariants";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline" | "link" | "destructive";
type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, variant = "default", children, className }) => {
  const variantClass = buttonVariants[variant] || buttonVariants["default"];
  return (
    <button
      onClick={onClick}
      className={`${variantClass} ${className} flex items-center py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};
