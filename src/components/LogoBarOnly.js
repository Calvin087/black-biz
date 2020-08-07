import React from 'react'

const LogoBarOnly = (props) => {
    return (
      <div>
        <div id="logo">
          <img
            src="../images/black-logo.jpg"
            width={props.size}
            style={{ margin: props.center, padding: props.padding }}
          />
        </div>
      </div>
    );
}

export default LogoBarOnly;