import React from "react";
import ButtonUIExternal from "../components/ButtonUIExternal";

const CardEducation = () => {
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
          <img className="w-full h-auto" src="../images/education-card.png" />
        </div>

        <div className="p-4">
          <h2 style={({ color: "#16213a" }, clamp2)} className="text-1xl mb-2">
            700 Free Online Programming & Computer Science Courses You Can Start
            This August
          </h2>
          <p className="text-sm text-gray-600 mb-2">Dec 30, 2019</p>
          <p className="text-sm text-gray-700 mb-6" style={clamp3}>
            Eight years ago, universities like MIT and Stanford first opened up
            free online courses to the public. Today, close to 1,000 schools
            around the world have created thousands of free online courses,
            popularly known as Massive Open Online Courses or MOOCs.
          </p>
          <ButtonUIExternal
            borderCol={"#16213a"}
            content={"Read The Post"}
            color={"#16213a"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardEducation;
