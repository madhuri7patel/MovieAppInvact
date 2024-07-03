import React from "react";
import "./Toggle.css";

const Toggle = ({ style, onToggle, isChecked }) => {
  const handleChange = (e) => {
    onToggle && onToggle(e.target.checked);
  };

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", ...style }}>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={isChecked} />
        <span className="slider round"></span>
      </label>
      <span> Watched</span>
    </div>
  );
};

export default Toggle;
