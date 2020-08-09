import React from "react";
import { Link } from "react-router-dom";

const ButtonUI = (props) => {
  return (
    <a href={props.alink} target="_blank">
      <button
        className="text-blue-900 border-2 py-2 px-4"
        style={{ borderColor: props.borderCol, color: props.color }}
      >
        {props.content}
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 inline ml-8"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </a>
  );
};

export default ButtonUI;
