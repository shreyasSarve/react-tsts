import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const onUppercase = () => {
    const uppercase = text.toUpperCase();
    setText(uppercase);
  };
  const onLowercase = () => {
    const lowercase = text.toLowerCase();
    setText(lowercase);
  };
  const onClear = () => {
    setText("");
  };
  const [text, setText] = useState("Enter Your Text here");
  return (
    <>
      <div className="container">
        <h1>Enter Your Text Below</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            // id="floatingTextarea2"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary " onClick={onUppercase}>
          Convert for Uppercase
        </button>
        <button
          className="btn btn-outline-secondary mx-3"
          onClick={onLowercase}
        >
          Click for Lowercase
        </button>
        <button className="btn btn-danger mx-0" onClick={onClear}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h5>Your text Summary</h5>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
