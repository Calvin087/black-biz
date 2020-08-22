import React from "react";
import ButtonUIExternal from "../components/ButtonUIExternal";

const CardEducation = (props) => {
  let clamp3 = {
    WebkitLineClamp: "3",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };

  let clamp2 = {
    WebkitLineClamp: "2",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };

  return (
    <div className="sm:w-1/4 p-2">
      <div
        className="border-solid border-2 bg-white"
        style={{ borderColor: "#dfd5c4" }}
      >
        <div>
          <img className="w-full h-auto" src={props.acf.image.sizes.medium} />
        </div>

        <div className="p-4">
          <h2 style={({ color: "#16213a" }, clamp2)} className="text-1xl mb-2">
            {props.acf.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">{props.acf.date}</p>
          <p className="text-sm text-gray-700 mb-6" style={clamp3}>
            {props.acf.description}
          </p>
          <ButtonUIExternal
            borderCol={"#16213a"}
            content={"Read The Post"}
            color={"#16213a"}
            alink={props.acf.link}
          />
        </div>
      </div>
    </div>
  );
};

export default CardEducation;
