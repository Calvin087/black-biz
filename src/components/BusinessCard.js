import React from 'react'
import ButtonUI from '../components/ButtonUI'

const BusinessCard = () => {
    return (
      <div
        className="border-solid border-2 bg-white"
        style={{ borderColor: "#dfd5c4" }}
      >
        <div>
          <img
            className="w-full h-auto"
            src="../images/business-card-temp.jpg"
          />
        </div>

        <div className="p-4">
          <h2 style={{ color: "#16213a" }} className="text-2xl">
            La Pasa Gin Bar
          </h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            tincidunt dui. Donec commodo turpis augue, vel aliquet dolor.
          </p>
        </div>

        <div className="px-4 -ml-1 text-sm">
          <div className="flex text-gray-700 mb-2">
            <svg
              className="w-6 inline mr-2 -mt-4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p>Calle de San Bernardo, 73, 28015, Madrid, Spain</p>
          </div>
          <div className="flex text-gray-700 mb-2">
            <svg
              className="w-6 inline mr-1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <p>+34 644 71 15 85</p>
          </div>
        </div>

        <div className="p-4">
          <ButtonUI
            borderCol={"#16213a"}
            content={"Visit Website"}
            color={"#16213a"}
          />
        </div>
      </div>
    );
}

export default BusinessCard