import React from "react";
import LogoBarOnly from "../components/LogoBarOnly";
import HomeFourBlock from "../components/HomeFourBlock";
import FullWidthIntroLeft from "../components/FullWidthIntroLeft";
import ButtonUI from "../components/ButtonUI";

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

      <FullWidthIntroLeft
        bgColour={"#16213a"}
        title={"Local Black Owned Business List."}
        content={
          "Unlike other directories, our black owned business list is 100% free. Each listing is manually audited to ensure legitimate businesses listings."
        }
        image={"../images/full-width-intro-biz.jpg"}
        buttonContent={"Shop Local"}
      />
      <FullWidthIntroLeft
        bgColour={"#1e3142"}
        title={"Books on Essential Financial Literacy"}
        content={
          "Ensuring that our children are financially literate is the key to generational success and continued community growth."
        }
        image={"../images/full-width-intro-books.jpg"}
        buttonContent={"Start Investing"}
      />
      <FullWidthIntroLeft
        bgColour={"#27444c"}
        title={"Entreprenuer & CEO Interviews"}
        content={
          "A collection of interviews and inspirational videos of black business owners. Learn how the beat the odds and how you can do it too."
        }
        image={"../images/full-width-intro-ceo.jpg"}
        buttonContent={"Get Inspired"}
      />
      <FullWidthIntroLeft
        bgColour={"#335446"}
        title={"Online Courses & Free Education"}
        content={
          "Software development is a lucrative career that is lacking diversity. Change the industry with our list of free courses and learning resources."
        }
        image={"../images/full-width-intro-edu.jpg"}
        buttonContent={"Earn More"}
      />
    </div>
  );
};

export default HomePage;
