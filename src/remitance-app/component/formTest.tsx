import React from 'react'

const TestForm:React.FC = () => {
  const onSubmitHandler = async (e:any):Promise<void> => {
    e.preventDefault();
    const files:any = e.target.elements.file.files[0];
    console.log(files);
    const formData:FormData = new FormData()
    formData.append('avatar', files);
    formData.append('email','imazharul@test.com');

    const response = await fetch('/remitance/image_upload_test', {
      method:'POST',
      body:formData,
    })
  }

  return <>
    <h1>Hello World</h1>
    <form onSubmit={onSubmitHandler}> 
      <input type="file" name="file"></input>
      <button type='submit'>submit</button>
    </form>
  </>
}


export default TestForm;