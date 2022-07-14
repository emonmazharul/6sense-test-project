import { useState } from "react";

const text_input = ["text", "number", "email"];

function Input({
  label,
  placeholder,
  id,
  type,
  pattern,
  showErrorText,
  errorText,
}) {

  if (text_input.includes(type)) {

    function onFocusHandler() {
      showErrorText(id, '');
    }

    function onBlurHandler(e) {

      const value = e.target.value;
      if (type === "text" || type === "email") {
        if (!value.match(pattern)) {
          showErrorText(id, `Please enter a valid ${id}`);
        } else {
          showErrorText(id, "done");
        }
        return;
      }

      if (type === "number") {
        const value = e.target.value;
        if (Number(value) < 1) {
          showErrorText(id, "Age must be greater than 0");
        } else {
          showErrorText(id, "done");
        }
      }
    }

    function onChangeHandler(e) {
      const value = e.target.value;
      if (type === "text" || type === "email") {
        if (!value.match(pattern)) {
          showErrorText(id, ``);
        } else {
          showErrorText(id, "done");
        }
        return;
      }

      if (type === "number") {
        const value = e.target.value;
        if (Number(value) < 1) {
          showErrorText(id, "");
        } else {
          showErrorText(id, "done");
        }
      }
    }

    return (
      <div className="one">
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
    );
  }

  if (type === "radio") {

    function radio_onchange(e) {
      showErrorText(id, "done");
    }

    return (
      <div className="two">
        <span>{label}</span>
        <input type="radio" id="male" name="gender" value="Male" onClick={radio_onchange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female"  onClick={radio_onchange}/>
        <label htmlFor="female">Female</label>
        <br />
        <br />
        {/* <span style={{color:'red'}}>error text</span>
      <br/> */}
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div className="three">
        <input type="checkbox" id="subscribe" name="subscribe" />
        <label htmlFor="subscribe">Receive notifications</label>
        <br />
      </div>
    );
  }
}

export default Input;
