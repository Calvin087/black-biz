import React from "react";
import LogoBarOnly from "../components/LogoBarOnly";
import HomeFourBlock from "../components/HomeFourBlock";
import FullWidthIntroLeft from '../components/FullWidthIntroLeft'
import ButtonUI from '../components/ButtonUI'

const HomePage = () => {
  return (
    <div>
      <div className="px-8 pt-6">
        <LogoBarOnly />
      </div>

      {/* Start Of Hero */}
      <div id="hero">
        <div id="hero-left" className="p-8 mt-4">
          <h2 className="text-4xl text-blue-900 pb-2">
            Supporting The Black Economy
          </h2>
          <p className="text-l text-gray-800 font-light mb-8">
            We aim to curate and share the most powerful content to aid in the
            success of the generations that will follow us.
          </p>

          <ButtonUI
            borderCol={"#16213a"}
            content={"Get Started"}
            color={"#16213a"}
          />
        </div>

        <div id="hero-right">
          <img src="../images/big-kid-header.jpg" />
        </div>
      </div>
      {/* End Of Hero */}

      {/* Start Of Four Block */}

      <div className="my-6">
        <HomeFourBlock
          bgColour={"#16213a"}
          title={"Community Support"}
          content={"Free, Black owned business listings"}
        />
        <HomeFourBlock
          bgColour={"#1e3142"}
          title={"Financial Education"}
          content={"The missingschool lessons"}
        />
        <HomeFourBlock
          bgColour={"#27444c"}
          title={"Positive Role Models"}
          content={"Pure inspirationfrom black CEOs"}
        />
        <HomeFourBlock
          bgColour={"#335446"}
          title={"Free Education"}
          content={"Learn more toearn more"}
        />
      </div>

      {/* End Of Four Block */}

      <FullWidthIntroLeft />
      <FullWidthIntroLeft />
      <FullWidthIntroLeft />
      <FullWidthIntroLeft />
    </div>
  );
};

export default HomePage;
