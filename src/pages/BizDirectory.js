import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import BusinessSelectForm from '../components/BusinessSelectForm'
import CardBusinesses from "../components/CardBusinesses";
import HeroInnerPage from "../components/HeroInnerPage"

const BizDirectory = () => {

  {/* Start Of state */}
  const [listings, setListings] = useState([])
  const [dropDownCity, setDropDownCity] = useState([]);
  const [dropDownCountry, setDropDownCountry] = useState([]);
  const [dropDownCategories, setDropDownCategories] = useState([]);

  {/* End Of state */}

  {/* Start Of API Call */}
  const siteURL =
    "http://calvint2.sg-host.com/wp-json/wp/v2/business_listings?per_page=50";

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
{/* End Of API Call */}

{/* Start Of Helpers */}

function getListValues(a) {
  let tempArray = [];
  listings.map((listing) => tempArray.push(listing.acf[a]));
  let uniqueItem = new Set(tempArray);
  let uniqueArray = Array.from(uniqueItem).flat()
  return uniqueArray.sort();
}

{/* End Of Helpers */}

{/* Start Of Filters */}

const filteredListings = listings.filter(
  (listing) =>
  listing.acf.categories.includes(dropDownCategories) &&
  listing.acf.city.includes(dropDownCity) &&
  listing.acf.country.includes(dropDownCountry)
);

let cityList = getListValues("city");
let countryList = getListValues("country");
let categoriesList = getListValues("categories");
let filteredCategories = [...new Set(categoriesList)];

{/* End Of Filters */}

    return (
      <div>
        <div className="sm:pt-6">
          <NavigationBar />
        </div>

        <HeroInnerPage
          bgColor={"#16213a"}
          title={"Local Black Owned Business List."}
          content={
            "Unlike other directories, our black owned business list is 100% free. Each listing is manually audited to ensure legitimate businesses listings."
          }
          bgImage={`url("../images/full-width-intro-biz.jpg")`}
        />

        {/* Start Of Filter Form */}
        <div className="container m-auto sm:px-12 sm:pb-6">
          <BusinessSelectForm
            city={cityList}
            country={countryList}
            categories={filteredCategories}
            onCityChange={setDropDownCity}
            onCountryChange={setDropDownCountry}
            onCategoriesChange={setDropDownCategories}
          />
        </div>
        {/* End Of Filter Form */}

        {/* Start Of Cards */}
        <div className="container m-auto p-4 sm:px-16 sm:flex sm:flex-wrap sm:justify-center">
          {filteredListings.length === 0 ? (
            <div>
            <h2 className="text-center text-4xl pt-4 sm:pt-8 text-gray-600">Choose an Industry & Country to get started</h2>
            <p className="text-center text-1xl pt-2 sm:pt-4 text-gray-700">If you know a business that can fill this space, please send us their detail using <span className="font-bold text-blue-700">this form</span></p>
            </div>
          ) : (
            filteredListings.map((listing) => (
              <CardBusinesses key={listing.id} {...listing} />
            ))
          )}
          {/* End Of Cards */}
        </div>
      </div>
    );
}

export default BizDirectory