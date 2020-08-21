import React from "react";
import ButtonUIExternal from "../components/ButtonUIExternal";

const CardBooks = (props) => {

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
    <div className="sm:w-1/4 p-2 mb-6">
      <div className="text-center">
        <img className=" h-50 inline" src={props.acf.cover.sizes.medium} />
      </div>

      <div
        className="border-solid border-2 bg-white pt-20 -mt-20"
        style={{ borderColor: "#dfd5c4" }}
      >
        <div className="p-4">
          <h2 style={clamp2} className="text-1xl">
            {props.acf.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">{props.acf.author}</p>

          <div className="flex items-start mb-4">
            <svg
              className="h-6 -ml-1 mr-2"
              fill="#16213a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <p className="text-xs text-gray-500 mt-1">{props.acf.ratings}+ reviews</p> 
          </div>

          <p className="text-sm text-gray-700" style={clamp3}>
            {props.acf.description}
          </p>
        </div>

        <div className="p-4">
          <ButtonUIExternal
            borderCol={"#16213a"}
            content={"Visit Amazon"}
            color={"#16213a"}
            alink={props.acf.affiliatelink}
          />
        </div>
      </div>
    </div>
  );
};

export default CardBooks;
