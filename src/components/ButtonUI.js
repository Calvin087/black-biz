import React from 'react'

const ButtonUI = (props) => {
    return (
      <button className=" bg-white text-blue-900 border-2 py-2 px-4"
        style={{borderColor: props.borderCol, color: props.color}}>
            {props.content}
            <i className="fas fa-arrow-circle-right pl-2"></i>
      </button>
    );
}

export default ButtonUI