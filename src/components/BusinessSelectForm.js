import React from "react";

const BusinessSelectForm = (props) => {
  function handleCountryChange(e) {
    props.onCountryChange(e.target.value);
  }

  function handleCityChange(e) {
    props.onCityChange(e.target.value);
  }

  function handleCategoriesChange(e) {
    props.onCategoriesChange(e.target.value);
  }

  return (
    <div className="md:flex md:justify-between">
      <div className="md:w-1/3 px-4 mb-6 md:mb-0">
        <label className="block text-gray-700 text-xs mb-2">Industry</label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={handleCategoriesChange}
          >
            <option disabled selected>
              Choose An Industry
            </option>
            {props.categories.map((categories) => (
              <option key={categories}>{categories}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 px-4 mb-6 md:mb-0">
        <label className="block text-gray-700 text-xs mb-2">Country</label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={handleCountryChange}
          >
            <option disabled selected>
              Choose A Country
            </option>
            {props.country.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 px-4 mb-6 md:mb-0">
        <label className="block text-gray-700 text-xs mb-2">City</label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={handleCityChange}
          >
            <option disabled selected>
              Choose A City
            </option>
            {props.city.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSelectForm;
