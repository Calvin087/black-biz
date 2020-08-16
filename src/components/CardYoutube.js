import React from "react";

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

let iframe = '<iframe src=”https://www.youtube.com/embed/videoseries?list=PLRiOTYOXvFzaARHOdX5Q7aw70NLaIMPem” frameborder=”0″ allow=”accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture” allowfullscreen></iframe>'

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
            aaaaaaaaaaaa
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardYoutube;


