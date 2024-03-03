import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { IoIosSearch } from "react-icons/io";
import { DataProvider } from '../store/Datastore';

function SearchInputBox() {
  const {NewCity} = useContext(DataProvider);
  let place = useRef();

  const handlekeyup = (e)=>{
    if(e.key === "Enter"){
      NewCity(place.current.value);
    }
  }
  return (
    <>
    <div className="src">
    <IoIosSearch className='icon'/>
      <input onKeyUp={handlekeyup}
      type='text' id='inputbox' ref={place} className='inputbox' placeholder='Enter City Name....' autoComplete='off'/>
      </div>
    </>
  )
}

export default SearchInputBox

