import React from "react";
import ButtonUI from '../components/ButtonUI'

const FullWidthIntroLeft = (props) => {
  return (
    <div>
      <div className="z-0 -mb-4">
        <img src={props.image} />
      </div>

      <div
        className="p-6 mx-4 mb-6 z-10 relative"
        style={{ backgroundColor: props.bgColour }}
      >
        <h2 className="text-2xl font-light pb-4" style={{ color: "#d3ccb5" }}>
          {props.title}
        </h2>
        <p className="mb-4 text-white font-thin">
          {props.content}
        </p>
        <ButtonUI
          borderCol={"#f1f1f1"}
          content={props.buttonContent}
          color={"#f1f1f1"}
        />
      </div>
    </div>
  );
};

export default FullWidthIntroLeft;
