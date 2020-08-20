import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const VideoPage = (props) => {

 {/* Start Of state */}
  const { slug } = useParams();
  const [videoDetails, setVideoDetails] = useState({})
  const [loaded, setLoaded] = useState(false)
  
  
  {/* End Of state */}

  {/* Start Of API Call */}
  const siteURL =
    `http://calvint2.sg-host.com/wp-json/wp/v2/youtube?slug=${slug}/`;

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL)

      if(!response.ok) {
        console.log("content not loaded");
        return
      }

      const results = await response.json()
      setVideoDetails(results[0])
      setLoaded(true)
    }
    loadlistings()
  }, [])
{/* End Of API Call */}

console.log(videoDetails);

  return (
    <div>
      <div className="sm:pt-6">
        <NavigationBar />
      </div>

      {loaded !== true ? (
        <h1>Please Wait</h1>
      ) : (
        <div className="container m-auto p-8 sm:pt-20 sm:px-16 sm:flex sm:flex-wrap sm:justify-between">
          <div className=" w-full sm:w-1/2">
            <iframe
              className="w-full sm:w-full"
              height="320px"
              src={`https://www.youtube.com/embed/videoseries?list=${videoDetails.acf.playlist_id}`}
            />
          </div>

          <div className="w-full pt-10 sm:pt-0 sm:w-1/2 sm:pl-10">
            <h2 className="text-3xl pb-0" style={{ color: "#16213a" }}>
              {videoDetails.title.rendered}
            </h2>
            <p className="text-1xl pb-8 font-thin text-gray-600">
              by {videoDetails.acf.channelname}
            </p>
            <p className="pb-4">
              {videoDetails.acf.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;

// "http://calvint2.sg-host.com/wp-json/wp/v2/youtube?slug=our-rich-journey/"

