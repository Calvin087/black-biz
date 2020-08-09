import React from "react";
import ButtonUI from "../components/ButtonUI";

const YoutubeCard = () => {
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
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/OWJ2A1D951M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-4">
          <h2 style={({ color: "#16213a" }, clamp2)} className="text-2xl mb-2">
            How about another joke, Murray? | Joker [UltraHD, HDR]
          </h2>
          <p className="text-sm text-gray-600 mb-2">Dec 30, 2019</p>
          <p className="text-sm text-gray-700 mb-4" style={clamp3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            fringilla ipsum. Proin diam nibh, varius vel sapien a, efficitur
            mollis lorem. Nunc pretium, justo id tempor ullamcorper, felis elit
            venenatis leo, tempor tempus quam purus non justo. Nulla erat est,
            elementum in bibendum ut, volutpat ac est. Curabitur nec eros quis
            dui dictum interdum. Suspendisse condimentum imperdiet purus vitae
            mattis. Cras id pharetra massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
