import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardEducation from "../components/CardEducation";
import HeroInnerPage from "../components/HeroInnerPage";
import LoadingIcon from '../components/LoadingIcon'

const OnlineEducation = () => {
  {
    /* Start Of state */
  }
  const [eduLstings, setEduLstings] = useState([]);
  const [loaded, setLoaded] = useState(false);

  {
    /* End Of state */
  }

  {
    /* Start Of API Call */
  }
  const siteURL = "https://calvint2.sg-host.com/wp-json/wp/v2/education?per_page=50";

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL);

      if (!response.ok) {
        console.log("content not loaded");
        return;
      }

      const results = await response.json();
      setEduLstings(results);
      setLoaded(true);
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
        bgColor={"#335446"}
        title={"Online Education"}
        content={
          "Many industries are lacking diversity. Skill up and change the game with our list of free courses and learning resources."
        }
        bgImage={`url("../images/full-width-intro-edu.jpg")`}
      />
      {/* Start Of Cards */}
      {loaded !== true ? (
        <LoadingIcon />
      ) : (
        <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-center">
          {eduLstings.map((edu) => (
            <CardEducation key={edu.id} {...edu} />
          ))}
        </div>
      )}
      {/* End Of Cards */}
    </div>
  );
};

export default OnlineEducation;
