import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardYoutube from "../components/CardYoutube";
import HeroInnerPage from "../components/HeroInnerPage";

const CEOInterviews = () => {
  {
    /* Start Of state */
  }
  const [listings, setYTListings] = useState([]);
  const [dave, setDave] = useState(["dave", "dave"]);

  {
    /* End Of state */
  }

  {
    /* Start Of API Call */
  }
  const siteURL =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL-jeZzL1fpWi6uHu8chQ-MFHIrXNAlLes&key=AIzaSyAY2i0_Y0WQDT2r63RBDj5hOvwaSQt3gtw";

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL);

      if (!response.ok) {
        console.log("content not loaded");
        return;
      }

      const results = await response.json();
      setYTListings(results.items);
    }
    loadlistings();
  }, []);
  {
    /* End Of API Call */
  }

  return (
    <div>
      <div className="sm:pt-6">
        <NavigationBar />
      </div>
      <HeroInnerPage
        bgColor={"#27444c"}
        title={"Entreprenuer & CEO Interviews."}
        content={
          "A collection of interviews and inspirational videos of black business owners. Learn how the beat the odds and how you can do it too."
        }
        bgImage={`url("../images/full-width-intro-ceo.jpg")`}
      />
      {/* Start Of Cards */}
      <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-center">
        {listings.map((video) => (
          <CardYoutube key={video.id} {...video} />
        ))}
      </div>
      {/* End Of Cards */}
    </div>
  );
};

export default CEOInterviews;

