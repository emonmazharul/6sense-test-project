import React, { useState } from "react";

const text_input = ["text", "number", "email"];

interface Props {
  label:string;
  placeholder:string;
  id:string;
  type:string;
  showErrorText:any;
  errorText:string;
  pattern:RegExp | null;
}

const Input:React.FC<Props> =  ({
  label,
  placeholder,
  id,
  type,
  pattern,
  showErrorText,
  errorText,
}) => {

  const onFocusHandler = ():void => {
    showErrorText(id, '');
  }

  const onBlurHandler = (e:React.FormEvent<HTMLInputElement>):void => {

    const value = e.currentTarget.value;
    if ( (type === "text" || type === "email") && pattern !== null) {
      if (!value.match(pattern)) {
        showErrorText(id, `Please enter a valid ${id}`);
      } else {
        showErrorText(id, "done");
      }
      return;
    }

    if (type === "number") {
      const value = e.currentTarget.value;
      if (Number(value) < 2) {
        showErrorText(id, "Age must be greater than 1");
      } else {
        showErrorText(id, "done");
      }
    }
  }

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>):void => {
    const value = e.currentTarget.value;
    if ((type === "text" || type === "email") && pattern !== null ) {
      if (!value.match(pattern)) {
        showErrorText(id, ``);
      } else {
        showErrorText(id, "done");
      }
      return;
    }

    if (type === "number") {
      const value = e.currentTarget.value;
      if (Number(value) < 2) {
        showErrorText(id, "");
      } else {
        showErrorText(id, "done");
      }
    }
  }

  const radio_onchange = (e:React.FormEvent<HTMLInputElement>):void => {
    showErrorText(id, "done");
  }

  const condition_one = text_input.includes(type);
  const condition_two = type === "radio"
  const condition_three = type === "checkbox";

  return <>
    {condition_one && <div className="one" >
      <label htmlFor={id}>{label}</label>
        <input
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
        />
        <span style={{ color: "red" }}>
          { errorText === "done" ? "" : errorText}
        </span>
        <br />
    </div>
    }

    {condition_two && <div className="two">
        <span>{label}</span>
        <input type="radio" id="male" name="gender" value="Male" onClick={radio_onchange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female"  onClick={radio_onchange}/>
        <label htmlFor="female">Female</label>
        <br />
        <br />
      </div>
    }

    {condition_three && <div>
        <input type="checkbox" id="subscribe" name="subscribe" />
        <label htmlFor="subscribe">Receive notifications</label>
        <br />
      </div>
    }
  </>
}

export default Input;
