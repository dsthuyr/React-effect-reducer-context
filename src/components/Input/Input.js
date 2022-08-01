import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.inputState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.inputState.value}
        onChange={props.changeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
}

export default Input;
