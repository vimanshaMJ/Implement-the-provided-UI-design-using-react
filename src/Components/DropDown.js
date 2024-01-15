import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./DropDown.module.css";

export default function TheDropdown({
  dropdownTitle,
  description,
  classname,
  ...props
}) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={classes.dropdownToggle}
        variant="primary"
        id="dropdown-basic"
      >
        {dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.dropdownMenu}>
        <Dropdown.Item className={classes.dropdownItem} href="#/action-1">
          {description}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
