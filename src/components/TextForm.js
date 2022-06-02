import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPERCASE!", "success");
  }

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //split by spaces
    setText(newText.join(" ")); // join with single space
    props.showAlert("Removed Extra Spaces!", "success");
  }

  const handleSortAlphabetically = () => {
    let newText = text.split(" ").sort();
    setText(newText.join("\n"));
    props.showAlert("Alphabetically Sorted!", "success");
  }

  return (
    <>
      <div className='container'>
        <hr />
        <h2 class="h1-responsive font-weight-bold text-center">{props.heading}</h2>
        <hr />
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="10" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#e3e7ee' }} ></textarea>
        </div>
        <div className="container my-3">
          <p>Character Count : {text.length} | Word Count : {text === "" ? 0 : text.split(" ").length} | Line Count : {text === "" ? 0 : text.split("\n").length} | Minutes to read : {text === "" ? 0 : 0.008 * text.split(" ").length} </p>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}> UPPERCASE </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}> lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}> Remove Extra Spaces </button>
        <button className="btn btn-primary mx-2" onClick={handleSortAlphabetically}> Sort Alphabetically </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}> Copy to Clipboard </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear </button>
      </div>
    </>
  )
}
