import React from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchInputBox() {
  return (
    <>
    <div className="src">
    <IoIosSearch className='icon'/>
      <input type='text' id='inputbox' className='inputbox' placeholder='Enter City Name....' autoComplete='off'/>
      </div>
    </>
  )
}

export default SearchInputBox

