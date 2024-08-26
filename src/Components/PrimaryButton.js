import React from "react";
import classes from "./PrimaryButton.module.css";

export default function PrimaryActionButton({
  buttonText,
  className,
  ...props
}) {
  return (
    <button className={`btn ${classes.actionButton} ${className}`} {...props}>
      {buttonText}
    </button>
  );
}
