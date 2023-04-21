import React, { useState } from "react";
import "./Button.css";
import { Variant } from "../../types/Variant";

interface ButtonProps {
  label?: string;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  children,
  onClick,
}) => {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={onClick} type={type} className={`${variant}`}>
      {children}
    </button>
  );
};

export default Button;
