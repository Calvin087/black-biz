import React, { useState } from 'react'
import LogoBarOnly from '../components/LogoBarOnly'

const NavigationBar = (props) => {

    const [isOpen, setOpen] = useState(false)

    return (
      <div className="container sm:m-auto sm:flex sm:justify-between sm:px-12">
        <div className="flex items-center justify-between p-4">
          <LogoBarOnly size={"150"} />

          {/* Start of Burger */}
          <div className="sm:hidden">
            <svg
              onClick={() => setOpen(!isOpen)}
              className="h-6 block"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </div>
        </div>
        {/* End of Burger */}

        {/* Start of Nav Links */}
        <div class={isOpen ? "block" : "hidden sm:block"}>
          <div className="px-2 sm:flex">
            <a className="px-2 py-1 sm:mt-4 sm:ml-4 block rounded hover:bg-gray-400">Link 1</a>
            <a className="px-2 py-1 sm:mt-4 sm:ml-4 block rounded hover:bg-gray-400">Link 2</a>
            <a className="px-2 py-1 sm:mt-4 sm:ml-4 block rounded hover:bg-gray-400">Link 3</a>
          </div>
        </div>
        {/* End of Nav Links */}
      </div>
    );
}

export default NavigationBar