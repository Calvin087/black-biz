import React from 'react'
import { Link } from 'react-router-dom'

const HomeFourBlock = (props) => {
    return (
      <div>
        {/* Block One */}
        <div
          className="p-6 mx-4 sm:mx-0 sm:pr-6"
          style={{ backgroundColor: props.bgColour }}
        >
          <h3
            id="homefour"
            className="text-xl font-thin"
            style={{ color: "#d3ccb5" }}
          >
            {props.title}
          </h3>

          {/* Start Of Block Content */}
          <div>
            <p className="text-white font-light text-sm">
            <Link to={props.link}>
              {props.content}
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 inline ml-2"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </p>
          </div>
          {/* End Of Block Content */}
        </div>
        {/* Block One */}
      </div>
    );
}

export default HomeFourBlock