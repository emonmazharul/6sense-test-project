import React, { useRef, useState, useEffect } from "react";
import { Header, SubHeader } from "./Header";
import Input from "./Input";
import Button from "./Button";
import formFields from "./formFields";


interface data_obj {
  name:string;
  surename:string;
  age:number;
  gender:string;
  email:string;
  subscribe:boolean;
  favouriteColor:string;
}

interface error_text_interface {
  name:string;
  surename:string;
  age:string;
  email:string;
  gender:string;
  favouriteColor:string;
}

interface Props {
  addData:(new_data:data_obj) => void
}

const Form:React.FC<Props> = ({ addData }) => {
  
  const formRef = useRef<HTMLFormElement>(null);

  const [errorTexts, setErrorTexts] = useState<error_text_interface>({
    name: "",
    surename: "",
    age: "",
    email: "",
    gender:"",
    favouriteColor:""
  });

  const [btnDisabled, changeState] = useState<boolean>(true);

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

  const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const target = e.target as typeof e.target  & {
      name:{value:string},
      surename:{value:string},
      age:{value:string},
      email:{value:string},
      gender:{value:string},
      subscribe:{checked:boolean},
      favouriteColor:{value:string}
    }
    const name = target.name.value;
    const surename = target.surename.value;
    const age = target.age.value;
    const email = target.email.value;
    const gender = target.gender.value;
    const subscribe = target.subscribe.checked;
    const favouriteColor = target.favouriteColor.value;

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
    formRef.current?.reset();
  }

  const onResetHandler = ():void => {
    // const target:HTMLFormElement|null = formRef.current ? formRef.current.reset : null;
    formRef.current?.reset();
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

  const showErrorText = (key:string, text:string):void => {
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
            errorText={errorTexts[field.id as keyof error_text_interface]}
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
