import React from 'react'
import { useContext } from 'react';
import { DataProvider } from '../store/Datastore';

function Background() {
  const {background} = useContext(DataProvider);

  return (
    
    <>
    <div className="image">
     <img src={background} alt="weather icon" />
     </div>
    </>
  )
}

export default Background;
