import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import LoadingIcon from '../components/LoadingIcon'

const VideoPage = (props) => {

 {/* Start Of state */}
  const { slug } = useParams();
  const [videoDetails, setVideoDetails] = useState({})
  const [loaded, setLoaded] = useState(false)
  
  
  {/* End Of state */}

  {/* Start Of API Call */}
  const siteURL =
    `https://calvint2.sg-host.com/wp-json/wp/v2/youtube?slug=${slug}/`;

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

  return (
    <div>
      <div className="sm:pt-6">
        <NavigationBar />
      </div>

      {loaded !== true ? (
        <LoadingIcon />
      ) : (
        <div className="container m-auto p-8 sm:pt-20 sm:px-16 sm:flex sm:flex-wrap sm:justify-between">
          <div className=" w-full sm:w-1/2 sm:pt-2">
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

            <img className="w-24 pb-4" src="../images/adblock.png" />
            <p className="pb-8 text-xs text-red-800">
              <span className="font-bold">Warning:</span> AdBlock will stop this
              video series from playing on this page. If you see playback
              errors, AdBlock would be the reason.
            </p>

            <p className="font-bold pb-2">About This Series:</p>
            <p className="pb-4">{videoDetails.acf.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;

// "http://calvint2.sg-host.com/wp-json/wp/v2/youtube?slug=our-rich-journey/"

