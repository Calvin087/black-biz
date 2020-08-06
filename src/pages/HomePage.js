import React from "react";
import LogoBarOnly from "../components/LogoBarOnly";
import HomeFourBlock from "../components/HomeFourBlock";
import FullWidthIntroLeft from '../components/FullWidthIntroLeft'

const HomePage = () => {
  return (
    <div>
      <LogoBarOnly />

      {/* Start Of Hero */}
      <div id="hero">
        <div id="hero-left-side">
          <h2>Supporting The Black Economy</h2>
          <p>
            We aim to curate and share the most powerful content to aid in the
            success of the generations that will follow us.
          </p>
        </div>

        <div id="hero-right-side">
          <img src="../images/big-kid-header.jpg" />
        </div>
      </div>
      {/* End Of Hero */}

      <HomeFourBlock />
      <HomeFourBlock />
      <HomeFourBlock />
      <HomeFourBlock />

      <FullWidthIntroLeft />
      <FullWidthIntroLeft />
      <FullWidthIntroLeft />
      <FullWidthIntroLeft />

    </div>
  );
};

export default HomePage;
