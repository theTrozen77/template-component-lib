import React from "react";

export interface ButtonProps {
  label: string;
  name?: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
