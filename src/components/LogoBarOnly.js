import React from 'react'
import { Link } from 'react-router-dom'

const LogoBarOnly = (props) => {
    return (
      <div>
        <div id="logo">
          <Link to={`/`}>
            <img
              src="../images/black-logo.svg"
              width={props.size}
              style={{ margin: props.center, padding: props.padding }}
            />
          </Link>
        </div>
      </div>
    );
}

export default LogoBarOnly;