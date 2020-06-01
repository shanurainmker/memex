import React from "react";

export default function Button({ onclick, value, className }) {
  return (
    <div>
      <button onClick={onclick} className={className}>
        {" "}
        {value}
      </button>
    </div>
  );
}
