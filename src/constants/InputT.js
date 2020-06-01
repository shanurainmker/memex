import React from "react";

export default function InputT({
  type,
  value,
  placeholder,
  name,
  handleChnage,
  classN,
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChnage(e)}
        name={name}
        className={classN + " mt-3 mb-2"}
      />
    </div>
  );
}
