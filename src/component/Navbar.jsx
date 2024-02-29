import React from 'react'
import SearchInputBox from './SearchInputBox'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h1 className='heading'>Weather App</h1>
        <SearchInputBox/>
      </div>
    </>
  )
}

export default Navbar
