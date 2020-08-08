import React from 'react'
import NavigationBar from '../components/NavigationBar'
import BusinessSelectForm from '../components/BusinessSelectForm'
import BusinessCard from '../components/BusinessCard'

const BizDirectory = () => {
    return (
      <div>
        <div>
          <NavigationBar />
        </div>

        {/* Start Of Cards */}
        <div className="container m-auto p-4 w-full">
          <BusinessCard />
        </div>
        {/* End Of Cards */}

        {/* Start Of Hero */}
        <div className="container m-auto p-4">
          <div className="p-8" style={{ backgroundColor: "#16213a" }}>
            <h2
              className="text-2xl sm:text-3xl font-thin pb-4"
              style={{ color: "#d3ccb5" }}
            >
              Local Black Owned Business List.
            </h2>
            <p className="text-white font-thin sm:text-xl sm:mb-10">
              Unlike other directories, our black owned business list is 100%
              free. Each listing is manually audited to ensure legitimate
              businesses listings.
            </p>
          </div>

          {/* End Of Hero */}
          <div className="hidden">
            <img src="../images/full-width-intro-biz.jpg" />
          </div>
          {/* End Of Hero */}
        </div>
        {/* End Of Hero */}

        {/* Start Of Filter Form */}
        <BusinessSelectForm />
        {/* End Of Filter Form */}
      </div>
    );
}

export default BizDirectory