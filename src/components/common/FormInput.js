import React from "react";

const FormIput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div>
      {type === "textarea" ? (
        <div className="text-area">
          <textarea
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            rows="8"
            data-gramm_editor="false"
            className="message-us-input"
          >
            Enter your message
          </textarea>
        </div>
      ) : (
        <input
          className="message-us-input"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormIput;
