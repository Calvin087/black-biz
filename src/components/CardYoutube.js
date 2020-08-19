import React from "react";
import ButtonUI from "./ButtonUI";

const CardYoutube = (props) => {

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
          <img
            className="w-full h-48 object-cover object-center"
            src={props.acf.thumbnail.url}
          />
        </div>

        <div className="p-4">
          <h2 style={({ color: "#16213a" }, clamp2)} className="text-1xl mb-2">
            {props.title.rendered}
          </h2>

          <p className="text-sm text-gray-700 mb-4" style={clamp3}>
            {props.acf.description}
          </p>
          <ButtonUI
            borderCol={"#16213a"}
            content={"View Series"}
            color={"#16213a"}
            baseURL={"black-ceo-interviews"}
            slug={props.slug}
          />
        </div>
      </div>
    </div>
  );
};

export default CardYoutube;


