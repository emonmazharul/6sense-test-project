import { useRef, useState, useEffect } from "react";
import { Header, SubHeader } from "./Header";
import Input from "./Input";
import Button from "./Button";
import formFields from "./formFields";


function Form({ addData }) {
  const formRef = useRef(null);
  const [errorTexts, setErrorTexts] = useState({
    name: "",
    surename: "",
    age: "",
    email: "",
    gender:"",
    favouriteColor:""
  });

  const [btnDisabled, changeState] = useState(true);

  useEffect(() => {
    const { name, surename, age, email, gender, favouriteColor } = errorTexts;
    if (
      name === "done" &&
      surename === "done" &&
      age === "done" &&
      email === "done" &&
      gender === 'done' &&
      favouriteColor === 'done'
    ) {
      changeState(false);
    } else {
      changeState(true);
    }
  }, [errorTexts])

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const surename = e.target.elements.surename.value;
    const age = e.target.elements.age.value;
    const email = e.target.elements.email.value;
    const gender = e.target.elements.gender.value;
    const subscribe = e.target.elements.subscribe.checked;
    const favouriteColor = e.target.elements.favouriteColor.value;
    addData({
      name,
      surename,
      age: Number(age),
      email,
      gender,
      subscribe,
      favouriteColor,
    });

    setErrorTexts({
      name: "",
      surename: "",
      age: "",
      email: "",
      gender:"",
      favouriteColor:""
    });

    changeState(true);
    e.target.reset();
  }

  function onResetHandler() {
    formRef.current.reset();
    setErrorTexts({
      name: "",
      surename: "",
      age: "",
      email: "",
      gender:"",
      favouriteColor:"",
    });
    changeState(true);
  }

  function showErrorText(key, text) {
    setErrorTexts({
      ...errorTexts,
      [key]: text,
    });

  }

  return (
    <>
      <form onSubmit={onSubmitHandler} ref={formRef}>
        <Header heading={"Welcome to registration wizard"} />
        <SubHeader subheading="Please complete the form to process further" />
        {formFields.map((field) => (
          <Input
            key={field.key}
            id={field.id}
            label={field.label}
            pattern={field.pattern}
            type={field.type}
            placeholder={field.placeholder}
            errorText={errorTexts[field.id]}
            showErrorText={showErrorText}
          />
        ))}
        <Button
          text="Submit"
          color="white"
          padding="10px 15px"
          backgroundColor="red"
          type="submit"
          disabled={btnDisabled}
        />
        <Button
          onClickHandler={onResetHandler}
          text="Cancel"
          color="lightyellow"
          padding="10px 15px"
          backgroundColor="green"
          type="button"
        />
      </form>
    </>
  );
}

export default Form;
