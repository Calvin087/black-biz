import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import BusinessSelectForm from '../components/BusinessSelectForm'
import BusinessCard from '../components/BusinessCard'
import BookCard from '../components/BookCard'
import YoutubeCard from '../components/YoutubeCard'
import EducationCard from '../components/EducationCard'

const BizDirectory = () => {

  const [listings, setListings] = useState([])

  const siteURL =
    "http://calvint2.sg-host.com/wp-json/wp/v2/business_listings?per_page=20";

  useEffect(() => {
    async function loadlistings() {
      const response = await fetch(siteURL)

      if(!response.ok) {
        console.log("content not loaded");
        return
      }

      const results = await response.json()
      setListings(results)

    }
    loadlistings()
  }, [])

  console.log(listings[0]);
    return (
      <div>
        <div className="sm:pt-6">
          <NavigationBar />
        </div>

        {/* Start Of Hero */}
        <div className="container m-auto p-4 sm:px-16 sm:flex">
          <div className="p-8 sm:w-1/3" style={{ backgroundColor: "#16213a" }}>
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

          {/* Start Of right image */}
          <div
            className="hidden sm:block w-2/3"
            style={{
              backgroundImage: `url("../images/full-width-intro-biz.jpg")`,
              backgroundSize: "cover",
            }}
          ></div>
          {/* Start Of right image */}
        </div>
        {/* End Of Hero */}

        {/* Start Of Filter Form */}
        <div className="container m-auto sm:px-12 sm:pb-6">
          <BusinessSelectForm />
        </div>
        {/* End Of Filter Form */}

        {/* Start Of Cards */}
        <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-between">
            
            {listings.map((listing, index) => (
              <BusinessCard {...listing} />
            ))}
        
        </div>
        {/* End Of Cards */}
      </div>
    );
}

export default BizDirectory