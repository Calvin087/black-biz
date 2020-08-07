import React from "react";

const ButtonUI = (props) => {
  return (
    <button
      className="text-blue-900 border-2 py-2 px-4"
      style={{ borderColor: props.borderCol, color: props.color }}
    >
      {props.content}
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 inline ml-8"
      >
        <path d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default ButtonUI;
