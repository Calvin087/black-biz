import React from "react";
import ButtonUI from '../components/ButtonUI'

const FullWidthIntroLeft = () => {
  return (
    <div>
      <div>
        <h2>Local Black Owned Business List</h2>
        <p>
          Unlike other directories, our black owned business list is 100% free.
          Each listing is manually audited to ensure legitimate businesses
          listings.
        </p>
        <ButtonUI
          borderCol={"#16213a"}
          content={"Get Started"}
          color={"#16213a"}
        />
      </div>

      <div>
        <img src="../images/full-width-intro.jpg" />
      </div>
    </div>
  );
};

export default FullWidthIntroLeft;
