import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardYoutube from "../components/CardYoutube";
import HeroInnerPage from "../components/HeroInnerPage";

const VideoPage = () => {
  {
    /* Start Of state */
  }
  const [videoLstings, setVideoListings] = useState([]);
  {
    /* End Of state */
  }

  return (
    <div>
      <div className="sm:pt-6">
        <NavigationBar />
      </div>

      <div className="container m-auto p-4 sm:pt-20 sm:px-16 sm:flex sm:flex-wrap sm:justify-between">
        <div className=" w-full sm:w-1/2">
          <iframe
            className="w-full sm:w-full"
            height="320px"
            src="https://www.youtube.com/embed/videoseries?list=PL-jeZzL1fpWi6uHu8chQ-MFHIrXNAlLes"
          />
        </div>

        <div className="w-full pt-10 sm:pt-0 sm:w-1/2 sm:pl-10">
          <h2 className="text-3xl pb-4">Social Proof by David Shands</h2>
          <p className="pb-4">
            David has been an authority in the entrepreneurship arena helping
            individuals make the transition from their job to their dream for
            years, since he's done it himself in 2012.
          </p>
          <p>
            David has a very unique ability to see the holes in your business
            and show you step -by - step how to patch them with easy to apply
            strategies. The objective of this coaching program is to help you
            build, market, and monetize your ideas, not by motivation, but with
            a money map!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
