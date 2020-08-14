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

const iframeStyling =
  "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>";

const videoID = props.snippet.resourceId.videoId;
const videoLink = `<a href=https://www.youtube.com/embed/${videoID}?autoplay=1><img src=https://img.youtube.com/vi/${videoID}/hqdefault.jpg alt='${props.snippet.title}'><span>▶</span></a>`

  return (
    <div className="sm:w-1/4 p-2">
      <div
        className="border-solid border-2 bg-white"
        style={{ borderColor: "#dfd5c4" }}
      >
        <iframe
          className="w-full h-48"
          srcdoc={iframeStyling + videoLink}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title={props.snippet.title}
        ></iframe>

        <div className="p-4">
          <h2 style={({ color: "#16213a" }, clamp2)} className="text-1xl mb-2">
            {props.snippet.title}
          </h2>

          <p className="text-sm text-gray-700 mb-4" style={clamp3}>  
          {props.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardYoutube;


        // <div>
        //   <img
        //     className="w-full h-48 object-cover object-center "
        //     src={props.acf.bizimage.url}
        //   />
        // </div>;