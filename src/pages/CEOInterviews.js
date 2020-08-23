import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardYoutube from "../components/CardYoutube";
import HeroInnerPage from "../components/HeroInnerPage";
import LoadingIcon from '../components/LoadingIcon'

const CEOInterviews = () => {
  {
    /* Start Of state */
  }
  const [videoLstings, setVideoListings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  {
    /* End Of state */
  }

   {/* Start Of API Call */}
  const siteURL =
    "https://calvint2.sg-host.com/wp-json/wp/v2/Youtube?per_page=50";

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL)

      if(!response.ok) {
        console.log("content not loaded");
        return
      }

      const results = await response.json()
      setVideoListings(results);
      setLoaded(true);
    }
    loadlistings()
  }, [])
{/* End Of API Call */}

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

      {loaded !== true ? (
        <LoadingIcon />
      ) : (
        <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-center">
          {videoLstings.map((video) => (
            <CardYoutube key={video.id} {...video} />
          ))}
        </div>
      )}

      {/* End Of Cards */}
    </div>
  );
};

export default CEOInterviews;



// https://affiliate-program.amazon.co.uk/home/widgets/Amazon-QuickLinker-Widget

