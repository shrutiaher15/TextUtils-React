import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
  }

  const handleClearClick = () => {
    setText('');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>

        <div className="container my-3">
          <p>Character Count : {text.length} | Word Count : {text.split(" ").length} | Line Count : {text.split("\n").length} | Minutes to read : {0.008 * text.split(" ").length} </p>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}> UPPER CASE </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}> lower case </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear </button>

      </div>
    </>
  )
}
