import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
      <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}> Convert to Uppercase </button>
      <button className="btn btn-primary MX-2" onClick={handleLowercaseClick}> Convert to Lowercase </button>
    </div> 


    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words {text.length} characers</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}
