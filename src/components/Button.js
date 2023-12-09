import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="px-5 py-1 m-3 bg-gray-200 rounded-lg font-semibold">{name}</button>
    </div>
  );
}

export default Button;
