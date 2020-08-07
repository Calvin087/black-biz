import React from 'react'
import LogoBarOnly from '../components/LogoBarOnly'

const Footer = () => {
    return (
      <div className="m-12">
        <LogoBarOnly size={"200px"} center={"auto"} padding={"0px 0px 20px 0px"} />
        <p className="text-sm text-gray-600 text-center">
          Finding Global Directory Services is easy by searching our trusted
          network of top-rated Global Directory Services.
        </p>
      </div>
    );
}

export default Footer