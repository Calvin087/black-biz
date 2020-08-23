import React from "react";
import LogoBarOnly from "../components/LogoBarOnly";

const Footer = () => {
  return (
    <div className="m-12">
      <LogoBarOnly
        size={"150px"}
        center={"auto"}
        padding={"0px 0px 20px 0px"}
      />
      <p className="text-sm text-gray-600 text-center">
        We aim to help the next generation to develop Business, Financial and
        Educational acumen.
      </p>
      <p className="text-sm text-gray-600 text-center">
        Website designed and maintained by{" "}
        <a href="https://www.calvintorra.com/" target="_blank">
          <strong>Calvin Torra</strong>
        </a>
      </p>
    </div>
  );
};

export default Footer;
