import React from "react";
import classes from "./SecondaryButton.module.css";

export default function SecondaryActionButton({
  buttonText,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={`btn btn-outline-light ${classes.actionButton} ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
}
