// components/Input.js
import React from "react";
import "./Input.css";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  containerClass = "",
  label,
  onChange,
  onChangeText,
  ...props
}) => {
  const handleBlur = (event) => {
    if (type === "tel") {
      const phoneNumber = event.target.value;
      const phoneNumberPattern = /^[6-9]\d{9}$/; // Indian phone number pattern

      if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Invalid Indian phone number");
      }
    }

    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const handleChange = (event) => {
    onChange && onChange(event);
    onChangeText && onChangeText(event.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      {label && (
        <label htmlFor={props.name} className="text-sm text-gray-600">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="input"
        {...props}
      />
    </div>
  );
};

export default Input;
//console.log("madhuri");