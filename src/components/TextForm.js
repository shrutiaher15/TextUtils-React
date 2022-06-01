import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
       <h3> {props.heading} </h3> 
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUppercaseClick}> Convert to Uppercase </button>
    </div> 
  )
}
