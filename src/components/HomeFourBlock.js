import React from 'react'

const HomeFourBlock = (props) => {
    return (
      <div>
        {/* Block One */}
        <div
          className="p-6 mx-4"
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
            <p className="text-white font-light text-l">
              {props.content}
              <i className="fas fa-arrow-circle-right pl-4"></i>
            </p>
          </div>
          {/* End Of Block Content */}
        </div>
        {/* Block One */}
      </div>
    );
}

export default HomeFourBlock