import React from "react";

const HeroInnerPage = (props) => {
  return (
    <div>
      {/* Start Of Hero */}
      <div className="container m-auto p-4 sm:px-16 sm:flex">
        <div className="p-8 sm:w-1/3" style={{ backgroundColor: props.bgColor }}>
          <h2
            className="text-2xl sm:text-3xl font-thin pb-4"
            style={{ color: "#d3ccb5" }}
          >
            {props.title}
          </h2>
          <p className="text-white font-thin sm:text-xl sm:mb-10">
            {props.content}
          </p>
        </div>

        {/* Start Of right image */}
        <div
          className="hidden sm:block w-2/3"
          style={{
            backgroundImage: props.bgImage,
            backgroundSize: "cover",
          }}
        ></div>
        {/* Start Of right image */}
      </div>
      {/* End Of Hero */}
    </div>
  );
};

export default HeroInnerPage;
