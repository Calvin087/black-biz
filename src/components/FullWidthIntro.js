import React from "react";
import { Link } from 'react-router-dom'
import ButtonUI from "../components/ButtonUI";

const FullWidthIntro = (props) => {
  return (
    <div
      className="m-auto sm:flex mb-10 sm:mb-16"
      style={{ flexDirection: props.order }}
    >
      <div className="z-0 -mb-4">
        <img src={props.image} />
      </div>

      {/* Start Of Background */}
      <div
        className="p-6 mx-4 sm:mx-0 sm:-mt-4 z-10 relative sm:p-16 sm:w-2/5"
        style={{ backgroundColor: props.bgColour }}
      >
        <h2
          className="text-2xl sm:text-3xl font-thin pb-4"
          style={{ color: "#d3ccb5" }}
        >
          {props.title}
        </h2>
        <p className="mb-4 text-white font-thin sm:text-xl sm:mb-10">
          {props.content}
        </p>

        <Link to={props.link}>
          <ButtonUI
            borderCol={"#f1f1f1"}
            content={props.buttonContent}
            color={"#f1f1f1"}
            link={props.link}
          />
        </Link>
      </div>
      {/* End Of Background */}
    </div>
  );
};

export default FullWidthIntro;
